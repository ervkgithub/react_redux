import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchProductsList } from "../redux/actions/tempActions";
import axios from "axios";
import { Link } from "react-router-dom";

const TempList = (props) => {
    const products = useSelector((state) => state.fetch.products);
    const dispatch = useDispatch();

    // const fetchProducts = () => {
    //     axios.get('https://fakestoreapi.com/products')
    //     .then((response) => {
    //         console.log(response.data);
    //         dispatch(setProducts(response.data));
    //     })
    // }

    // useEffect(() => {
    //     fetchProducts();
    // }, [])

    const callApi = () => {
        console.log('api call action triggered from comp');
        dispatch(fetchProductsList());
    }

    // useEffect(() => {
    //     console.log('products', products);
    // })

    return(
        <> 
            <div className="row bg-success bg-opacity-10">
                <div className="col-12">
                    <h3>Products List</h3>
                </div>
            </div>

            <div className="row bg-success bg-opacity-10">
                <div className="col-12">
                    <button className="btn btn-primary" onClick={callApi}>Fetch Products List</button>
                </div>
            </div>

            <div className="row bg-secondary bg-opacity-10">
                <div className="col-12">
                    <div className="row">
                    {products && products.map((temp, index) => (
                        
                        <div className="col-4 border" key={temp.id+index}>
                            <Link to={`/product/${temp.id}`}>
                               <div>
                                    <img src={temp.image} className="img-fluid"/>
                                </div>
                            </Link>
                            <div>
                                {temp.id} - {temp.title}
                            </div>
                            <div>
                                {temp.price}
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default TempList;