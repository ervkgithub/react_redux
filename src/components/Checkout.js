import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUrl } from '../redux/actions/loginActions';
import {emptyCart} from '../redux/actions/cartActions';
import axios from 'axios';

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //login check else redirect to login
    const loginDetails = useSelector((state) => state.login.authUser);
    console.log(loginDetails);
    useEffect(() => {
        if(!loginDetails.loginStatus) {
            //set current page
            let tempUrl = window.location.pathname;
            console.log('url - ', tempUrl);
            dispatch(saveUrl(tempUrl));
            navigate('/login');
        }
    }, [loginDetails.loginStatus])


    const cartProductList = useSelector((state) => state.cart.cartProducts);

    const [orderDetails, setOrderDetails] = useState({});
    const [errorOrder, setErrorOrder] = useState(false);

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setOrderDetails({...orderDetails, [key]: value});
    }
    const paymentFn = () => {
        setOrderDetails({...orderDetails, ['paymentstatus']: true})
    }

    const placeOrderFn = async () => {
        let obj = {};
        obj.amount = cartProductList.reduce((a,b) => a + b.price, 0);
        obj.username = loginDetails.userName.username;
        obj.mobile = orderDetails.mobile;
        obj.address = orderDetails.address;
        obj.pincode = orderDetails.pincode;
        obj.paymentmode = orderDetails.paymentmode;
        obj.paymentstatus = orderDetails.paymentstatus;

        console.log('obj sent', obj);

        const url = 'http://localhost:4000/orders/placeorder';

        try{
            const response = await axios.post(url, obj, {
                headers: {
                    "x-access-token": loginDetails.userName.token
                }
            });
            console.log(response);
            if(response.status === 201) {
                console.log('response.orderid', response.data.orderid);
                //empty the cart
                dispatch(emptyCart());
                navigate('/orders', {state: response.data.orderid});
                setErrorOrder(false);
            }
        }
        catch{
            console.log('error scenario')
            setErrorOrder(true);
        }

    }


    useEffect(() => {
        // console.log(cartProductList);
        // let amount = cartProductList.reduce((a,b) => a + b.price, 0);
        // console.log(amount);
        console.log('orderDetails', orderDetails)
    })


    return (
        <div>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <h2>Checkout</h2>
                </div>
            </div>



            <div className="row bg-info bg-opacity-10">
                <div className="col-12">
                    <h4>Order Itmes</h4>
                </div>
                <div className="col-12 ">
                    
                <table className="table table-striped table-responsive">
                        <tr>
                            <th>Sr No</th>
                            <th>Title</th>
                            <th>Rate</th>
                            <th>Total Cost</th>
                        </tr>

                        {
                            cartProductList && cartProductList.map((tempItem) => (
                                <tr>
                                    <td>1</td>
                                    <td>{tempItem.title || ' '}</td>
                                    <td>{tempItem.price || ' '}</td>
                                    <td>{tempItem.price || ' '}</td>
                                </tr>
                            ))
                        }
                        
                        
                    </table>

                </div>
               
            </div>




            <div className="row bg-info bg-opacity-10">
                <div className="col-12">
                    <h4>Delivery Details</h4>
                </div>
                <div className="col-12">
                    Mobile: <input type="text" name="mobile" onChange={handleChange} value={orderDetails.mobile}/><br></br>
                    Address: <input type="text" name="address" onChange={handleChange} value={orderDetails.address}/><br></br>
                    PinCode: <input type="text" name="pincode" onChange={handleChange} value={orderDetails.pincode}/><br></br>
                    {/* <button className="btn btn-primary">Proceed to Checkout</button> */}
                </div>
            </div>






            <div className="row bg-info bg-opacity-10">
                <div className="col-12">
                    <h4>Payment Details</h4>
                </div>
                <div className="col-12">
                    Mode: 
                    <select name="paymentmode" onChange={handleChange} value={orderDetails.paymentmode}>
                        <option value="">Please select mode of payment</option>
                        <option value="COD">COD</option>
                        <option value="Wallet">Wallet</option>
                        <option value="UPI">UPI</option>
                        <option value="NetBanking">NetBanking</option>
                        <option value="Cards">Cards</option>
                    </select>
                    <br></br>
                    <button onClick={paymentFn} className="btn btn-warning bg-opacity-50">Mark Payment Done</button>
                </div>
            </div>




            <div className="row bg-info bg-opacity-10">
                <div className="col-12 ">
                    <button onClick={placeOrderFn} className="btn btn-primary">Place Order</button>
                </div>
            </div>


            {errorOrder && 
            <div className="row bg-secondary bg-opacity-50">
                <div className="col-12">
                    <div class="alert alert-danger" role="alert">
                        Order failed. plz try again<br></br>
                    </div>
                </div>
            </div>
        }
        
        </div>
    )
}

export default Checkout


// https://github.com/deepak104080/cetpa_react/blob/master/src/FormFn.js