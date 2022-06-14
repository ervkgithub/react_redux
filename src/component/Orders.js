import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUrl } from '../redux/actions/loginActions';

const Orders = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginDetails = useSelector((state) => state.login.authUser);
    const cartProductList = useSelector((state) => state.cart.cartProducts);

    const amount = cartProductList.reduce((a,b) => a + parseInt(b.price), 0);
    const date = new Date();
    console.log('amount - ', amount);
    
    
    useEffect(() => {
        if(!loginDetails.loginStatus) {
            //set current page
            let tempUrl = window.location.pathname;
            console.log('url - ', tempUrl);
            dispatch(saveUrl(tempUrl));
            navigate('/login');
        }
    }, [loginDetails.loginStatus])

    return(
        <>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <h2>Orders</h2>
                </div>
            </div>

            <div className="row bg-success bg-opacity-10">
                <div className="col-12 text-center">
                    <h2>Order Details</h2>
                </div>
                <div className="col-6 text-start">
                    <h4>Order ID - {`123455`}</h4>
                    <h4>Order Date -  {date.toDateString()}</h4>
                    <h4>Delivery Date - {date.toDateString()}</h4>
                    <h4>Amount - {amount}</h4>
                </div>
            </div>
        </>
    )
}

export default Orders;