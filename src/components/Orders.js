import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { saveUrl } from '../redux/actions/loginActions';
import axios from "axios";

const Orders = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginDetails = useSelector((state) => state.login.authUser);
    const cartProductList = useSelector((state) => state.cart.cartProducts);
    const [order, setOrder] = useState({});
    const [listOrders, setListOrders] = useState([])

    const {state} = useLocation();
    console.log('state', state);

    const callOrderApi = async () => {
        const url = 'http://localhost:4000/orders/orderbyorder/' + state;
        const response = await axios.get(url);
        console.log(response);
        setOrder(response.data);
    }

    const callOrderListApi = async () => {
        const url = 'http://localhost:4000/orders/orderbyuser/' + loginDetails.userName.username;
        const response = await axios.get(url);
        console.log(response);
        setListOrders(response.data);
    }
    useEffect(() => {
        if(state) {
            callOrderApi();
        }
        callOrderListApi();
    }, [])

    // const amount = cartProductList.reduce((a,b) => a + parseInt(b.price), 0);
    // const date = new Date();
    // console.log('amount - ', amount);
    
    
    useEffect(() => {
        if(!loginDetails.loginStatus) {
            //set current page
            let tempUrl = window.location.pathname;
            console.log('url - ', tempUrl);
            dispatch(saveUrl(tempUrl));
            navigate('/login');
        }
    }, [loginDetails.loginStatus])

    useEffect(() => {
        console.log('order, listOrders', order, listOrders);
    })

    return(
        <>
            {Object.keys(order).length !== 0 && (
            <>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12 text-center">
                    <h2>Order Details</h2>
                </div>
            </div>

            <div className="row bg-success bg-opacity-10 mb-4">
                <div className="col-12 text-center">
                    <h4>Order Placed Successfully</h4>
                </div>
                <div className="col-12 text-center">
                    <div>Order ID - {order.orderid}</div>
                    <div>Order Date -  {order.orderdate}</div>
                    <div>Delivery Date - {order.deliverydate}</div>
                    <div>Amount - {order.amount}</div>
                    <div>Address -  {order.address}</div>
                    <div>Mobile - {order.mobile}</div>
                    <div>Payment Status - {order.paymentstatus ? 'Successfull' : 'Pending'}</div>
                </div>

                <div className="col-12 text-center">
                    <Link to='/' className="btn btn-warning">Continue Shopping</Link>
                </div>
            </div>
            </>
            )}


            <div className="row bg-info bg-opacity-50">
                <div className="col-12 text-center">
                    <h2>Orders History</h2>
                </div>
            </div>


            <div className="row bg-info bg-opacity-10">
                <div className="col-12">
                    
                    <table className="table table-responsive ">
                            <tr>
                                <td>Order id</td>
                                <td>Order Date</td>
                                <td>Amount</td>
                                <td>Payment Status</td>
                                <td>Order Status</td>
                            </tr>
                        {listOrders && listOrders.map((item) => (
                            <tr>
                                <td>{item.orderid}</td>
                                <td>{item.orderdate}</td>
                                <td>{item.amount}</td>
                                <td>{item.paymentstatus}</td>
                                <td>{item.orderstatus}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </>
    )
}

export default Orders;