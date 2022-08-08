import React from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { logoutUser } from '../redux/actions/loginActions';

const Header = () => {
    const loginDetails = useSelector((state) => state.login.authUser);
    console.log('loginDetails', loginDetails);
    const dispatch = useDispatch();

    const cartProductList = useSelector((state) => state.cart.cartProducts);
    console.log('cart product in cart - ', cartProductList);

    const logoutfn = () => {
        dispatch(logoutUser());
    }
    return(
        <>
        <div className="row py-2">
            <div className="col-4">
                <Link to="/" className="app-logo"><h2>E-Commerce</h2></Link>
            </div>
            <div className="col-8 text-end">
                <Link className="header-menu" to="/">Home</Link>
                <Link className="header-menu" to="/cart">Cart {loginDetails.loginStatus && (<span class="cart-num">{cartProductList.length}</span>)} </Link>
                <Link className="header-menu" to="/orders">Orders</Link>
                <Link className="header-menu" to="/wishlist">Wishlist</Link>
            </div>
        </div>
        <div className="row bg-warning bg-opacity-50">
            <div className="col-8">
                <Link className="btn btn-success me-2" to="/category/menclothes">Men Clothes</Link>
                <Link className="btn btn-success me-2" to="/category/womenclothes">Women Clothes</Link>
                <Link className="btn btn-success me-2" to="/category/jewellery">Jewellery</Link>
                <Link className="btn btn-success me-2" to="/category/baggage">Baggage</Link>
            </div>
            
            <div className="col-4 text-end">
            {
                loginDetails.loginStatus ?
                (
                    <>
                    <span className="btn btn-warning">
                        {loginDetails.userName.username}
                    </span>
                    
                    <button className="btn btn-primary" onClick={logoutfn}>Logout</button>
                </>
                ) :
                (   
                <>
                    <Link className="btn btn-success me-2" to="/register">Register</Link>
                    <Link className="btn btn-primary" to="/login">Login</Link>
                </>
                )
            }
            </div>
        </div>
        </>
    )
}


export default Header;



// component - dispatch actions

// actions triggered connected with constants

// matching constants - reducer is being triggered - update state

// re-rendering - selector picks the latest value