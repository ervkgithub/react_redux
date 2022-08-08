import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkoutOrder } from '../redux/actions/checkoutActions';
import { removeProductFromCart } from '../redux/actions/cartActions';
import { saveUrl } from '../redux/actions/loginActions';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginDetails = useSelector((state) => state.login.authUser);
    
    useEffect(() => {
        if(!loginDetails.loginStatus) {
            //set current page
            let tempUrl = window.location.pathname;
            console.log('url - ', tempUrl);
            dispatch(saveUrl(tempUrl));
            navigate('/login');
        }
    }, [loginDetails.loginStatus])

    //useselector to fetch all items in cart
    const cartProduct = useSelector((state) => state);
    console.log('cart state - ', cartProduct);

    
    const cartProductList = useSelector((state) => state.cart.cartProducts);
    console.log('cart product in cart - ', cartProductList);

    const checkoutFn = () => {
        dispatch(checkoutOrder(cartProductList));
        navigate('/checkout');
    }

    const removeProduct = (id) => {
        dispatch(removeProductFromCart(id));
    }

    return(
        <>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <h2>Cart</h2>
                </div>
            </div>

            <div className="row bg-info bg-opacity-10">
                <div className="col-12">
                    <table className="table table-striped table-responsive">
                        <tr>
                            <th>Sr No</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Rate</th>
                            {/* <th>Quantity</th> */}
                            <th>Total Cost</th>
                            <th></th>
                        </tr>

                        {
                            cartProductList && cartProductList.map((tempItem) => (
                                <tr>
                                    <td>1</td>
                                    <td>{tempItem.title || ' '}</td>
                                    <td><img src={tempItem.image} alt="product image" className="img-fluid cart-image" /></td>
                                    <td>{tempItem.price || ' '}</td>
                                    {/* <td>1</td> */}
                                    <td>{tempItem.price || ' '}</td>
                                    <td><button className="btn btn-danger" onClick={() => removeProduct(tempItem.id)}>Remove</button></td>
                                </tr>
                            ))
                        }
                        
                        
                    </table>
                       
                       
                </div>
            </div>

            <div className="row bg-info bg-opacity-10">
                <div className="col-6 text-center">
                    <button onClick={checkoutFn} className="btn btn-primary">Proceed to Checkout</button>
                </div>
                <div className="col-6 text-center">
                    <Link to='/' className="btn btn-info">Continue Shopping</Link>
                </div>
            </div>
        </>
    )
}

export default Cart;