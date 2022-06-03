import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <>
        <div className="row bg-info bg-opacity-50">
            <div className="col-11">
                <h2>E-Commerce</h2>
            </div>
            <div className="col-1">
                <Link to="">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
        </>
    )
}


export default Header;