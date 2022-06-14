import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginUser} from '../redux/actions/loginActions';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let inputRef1 = useRef();
    let inputRef2 = useRef();
    let errorRef = useRef();

    const loginDetails = useSelector((state) => state.login);
    //console.log('-----------login details------------', loginDetails);

    useEffect(() => {
        if(loginDetails.authUser.loginStatus) {
            if(loginDetails.lastUrl) {
                // console.log('---------if ----------', loginDetails)
                navigate(loginDetails.lastUrl);
            }
            else{
                // console.log('---------if ----------', loginDetails)
                navigate('/');
            }
        }
    }, [loginDetails.authUser.loginStatus])

    const loginFn = () => {
        let username = inputRef1.current.value;
        let password = inputRef2.current.value;
        if(username !== '' && password !== '') {
            //call api with username and password
            //if login successfull
            if(username === 'ecommerceuser' && password === '123456') {
                //dispatch login action
                dispatch(loginUser('ecommerceuser'));
                errorRef.current.textContent = '';
            }
            else {
                //show error for incorrect data
                errorRef.current.textContent = 'Username or password incorrect.'
            }
        }
        else {
            //show error for proper inputs.
            errorRef.current.textContent = 'Please, fill all the values.'
        }
    }

    return(
        <>
        <div className="row bg-info bg-opacity-50">
            <div className="col-11">
                <h2>Login</h2>
            </div>
        </div>

        <div className="row bg-secondary bg-opacity-50">
            <div className="col-12">
                
                Username: <input type="text" name="" ref={inputRef1} value="ecommerceuser" /><br></br>
                Password: <input type="password" name="" ref={inputRef2} value="123456" /><br></br>
                <button className="btn btn-success" onClick={loginFn}>Login</button>
                <div className="text-danger" ref={errorRef}></div>
            </div>
        </div>

        </>
    )
}


export default Login;