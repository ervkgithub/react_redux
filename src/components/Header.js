import React from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { logoutUser } from '../redux/actions/loginActions';

const Header = () => {
    const loginDetails = useSelector((state) => state.login.authUser);
    const dispatch = useDispatch();

    const logoutfn = () => {
        dispatch(logoutUser());
    }
    return(
        <>
        <div className="row bg-info bg-opacity-50">
            <div className="col-12">
                <h2>E-Commerce</h2>
            </div>
        </div>
        <div className="row bg-warning bg-opacity-50">
            <div className="col-2">
                <Link className="btn btn-success" to="/">Home</Link>
            </div>
            <div className="col-2">
                <Link className="btn btn-success" to="/cart">Cart</Link>
            </div>
            <div className="col-2">
                <Link className="btn btn-success" to="/orders">Orders</Link>
            </div>
            <div className="col-2">
                <Link className="btn btn-success" to="/wishlist">Wishlist</Link>
            </div>
            <div className="col-2">
                
            </div>
            
            {
                loginDetails.loginStatus ?
                (
                <div className="col-2 text-end">
                    <button className="btn btn-primary" onClick={logoutfn}>Logout</button>
                </div>
                ) :
                (
                <div className="col-2 text-end">
                    <Link className="btn btn-primary" to="/login">Login</Link>
                </div>
                )
            }
        </div>
        </>
    )
}


export default Header;



// component - dispatch actions

// actions triggered connected with constants

// matching constants - reducer is being triggered - update state

// re-rendering - selector picks the latest value