import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginUser} from '../redux/actions/loginActions';
import axios from 'axios';

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let inputRef1 = useRef();
    let inputRef2 = useRef();
    let inputRef3 = useRef();
    let inputRef4 = useRef();
    let inputRef5 = useRef();
    let inputRef6 = useRef();
    let errorRef = useRef();

    // const loginDetails = useSelector((state) => state.login);
    // console.log('-----------login details------------', loginDetails);

    // useEffect(() => {
    //     if(loginDetails.authUser.loginStatus) {
    //         if(loginDetails.lastUrl) {
    //             // console.log('---------if ----------', loginDetails)
    //             navigate(loginDetails.lastUrl);
    //         }
    //         else{
    //             // console.log('---------if ----------', loginDetails)
    //             navigate('/');
    //         }
    //     }
    // }, [loginDetails.authUser.loginStatus])

    const addProductFn = async () => {
        let obj = {};
        // obj.productid = 'id129976443';
        // obj.productname = 'temo name';
        // obj.description = 'desc';
        // obj.price = 4545;
        // obj.category = 'clothing';
        // obj.image = 'http://www.google.com';
        console.log(inputRef1.current.value, inputRef2.current.value, inputRef3.current.value, inputRef4.current.value, inputRef5.current.value, inputRef6.current.value)
        obj.productid = inputRef1.current.value;
        obj.productname = inputRef2.current.value;
        obj.description = inputRef3.current.value;
        obj.price = inputRef4.current.value;
        obj.category = inputRef5.current.value;
        obj.image = inputRef6.current.value;
        if(obj.id !== '' && obj.name !== '' && obj.price !== '' && obj.category !== '') {
            //call api to add product
            const url = 'http://localhost:4000/products/';
            const response = await axios.post(url, obj).catch((err) => console.log('err', err));
            console.log(response);
        }
        else {
            errorRef.current.textContent = 'Please, fill all the values.'
        }
    }

    return(
        <>
        <div className="row bg-info bg-opacity-50">
            <div className="col-11">
                <h2>Add Product</h2>
                <h4>E Commerce - Admin/Employee</h4>
            </div>
        </div>

        <div className="row bg-secondary bg-opacity-50">
            <div className="col-12">
                
                Product ID: <input type="text" name="productid" ref={inputRef1}  /><br></br>
                Name: <input type="text" name="productname" ref={inputRef2}  /><br></br>
                Description: <input type="text" name="description" ref={inputRef3}  /><br></br>
                Price: <input type="number" name="price" ref={inputRef4}  /><br></br>
                Category: <input type="text" name="category" ref={inputRef5}  /><br></br>
                Image: <input type="text" name="image" ref={inputRef6} /><br></br>
                <button className="btn btn-success" onClick={addProductFn}>Add Product</button>
                <div className="text-danger" ref={errorRef}></div>
            </div>
        </div>

        </>
    )
}


export default AddProduct;