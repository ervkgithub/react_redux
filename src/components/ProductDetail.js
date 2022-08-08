import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/selectedProductActions";
import { addProductToCart } from "../redux/actions/cartActions";


const ProductDetail = () => {
    const tempProduct = useSelector((state) => state.productSelected);
    const loginDetails = useSelector((state) => state.login.authUser);
    const cartDetails = useSelector((state) => state.cart.cartProducts);

    console.log('selector data in product---', tempProduct);
    const {category, description, id : tempId, image, price, title} = tempProduct;

    // let tempArr = cartDetails.map((temp) => {
    //     return temp.id;
    // });

    // console.log('cartDetails', cartDetails);
    // console.log('tempArr', tempArr);

    let cartStatus = (cartDetails.map((temp) => {
        return temp.id;
    })).indexOf(tempId) !== -1;

    // console.log('cartStatus', cartStatus);
   
    
    const {id} = useParams();
    // console.log('id', id);
    const dispatch = useDispatch();
    //useSelector for detailed product or else make api call if detailed api gives much more data

    const fetchProductDetails = async () => {
        const url = 'http://localhost:4000/products/' + id;
        const response = await axios.get(url).catch((err) => console.log('err', err));
        // console.log('data from detailed description api call - ', response.data);
        //call disptach;
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        fetchProductDetails();
        
    },[])

    useEffect(() => {
        return () => {
            console.log('------unmount------')
          //remove current product from cart
          dispatch(removeSelectedProduct());
        };
    }, []);

    const addCartFn = () => {
        //call api to add data on server cart
        dispatch(addProductToCart(tempProduct));
    }

    return(
        <>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <h2>Product Details</h2>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-12">
                    {title ? (

                    
                    <div className="row">
                        <>
                        <div className="col-5">
                            <img src={image} alt="product image" className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <h3>{title || ' '}</h3>
                            <h4>Category - {category || ' '}</h4>
                            <p>Description - {description || ' '}</p>
                            <h4>Price - {price || ' '}</h4>
                        </div>
                        <div className="col-3">
                            <input type="text" placeholder="Check Service"/>
                            <br></br><br></br>
                            {loginDetails.loginStatus && (
                                <>
                                <button className="btn btn-warning" >Add to Wishlist</button>
                                <br></br><br></br>
                                {
                                    cartStatus ? 
                                    (
                                        <>
                                        <Link to='/cart' className="btn btn-info" >Go to Cart</Link>
                                        <br></br>
                                        <Link to='/' className="btn btn-primary">Continue Shopping</Link>
                                        </>
                                    ) : 
                                    (
                                        <button onClick={addCartFn} className="btn btn-success" >Add to Cart</button>
                                    )
                                }
                                
                                </>
                            )}
                            
                        </div>
                        
                        
                        
                        </>
                    
                    
                    </div>
                    ): (
                        <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"/>
                    )}
                </div>
            </div>
        </>
    )
}


export default ProductDetail;