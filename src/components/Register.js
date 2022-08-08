import React, {  useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [userStatus, setUserStatus] = useState(false);

    let inputRef1 = useRef();
    let inputRef2 = useRef();
    let inputRef3 = useRef();
    let inputRef4 = useRef();
    let inputRef5 = useRef();
    let errorRef = useRef();

    const registerFn = async () => {
        let username = inputRef1.current.value;
        let name = inputRef2.current.value;
        let email = inputRef3.current.value;
        let mobile = inputRef4.current.value;
        let password = inputRef5.current.value;
        if(username !== '' && email !== '' && password !== '') {
            const response = await axios.post('http://localhost:4000/users/adduser', {
                "username": username,
                "name": name,
                "email": email,
                "mobile": mobile,
                "password": password,
            })
            if(response.status === 201) {
                console.log('user created....');
                setUserStatus(true);
                errorRef.current.textContent = '';
            }
            else{
                errorRef.current.textContent = 'User Registration Failed. Plz try again.'
            }

      
        }
        else {
            errorRef.current.textContent = 'Please, fill all the values.'
        }
    }

    return(
        <>
        <div className="row bg-info bg-opacity-50">
            <div className="col-11">
                <h2>Register</h2>
            </div>
        </div>

        {userStatus && 
            <div className="row bg-secondary bg-opacity-50">
                <div className="col-12">
                    <div class="alert alert-success" role="alert">
                        User Created.<br></br>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        }


        <div className="row bg-secondary bg-opacity-50">
            <div className="col-12">
                
                Username: <input type="text" name="" ref={inputRef1}  /><br></br>
                Name: <input type="text" name="" ref={inputRef2}  /><br></br>
                Email: <input type="text" name="" ref={inputRef3}  /><br></br>
                Mobile: <input type="text" name="" ref={inputRef4}  /><br></br>
                Password: <input type="password" name="" ref={inputRef5}  /><br></br>
                <button className="btn btn-success" onClick={registerFn}>Register</button>
                <div className="text-danger" ref={errorRef}></div>
            </div>
        </div>

        </>
    )
}


export default Register;