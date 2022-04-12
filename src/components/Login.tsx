import React, { useState } from "react";
import '../App.css';
import Textfield from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button";
//import Recaptcha from "react-recaptcha";
import { Api } from '../api/endpoints'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Cookies from "js-cookie"
// import { useNavigate } from "react-router-dom";
import { ILoginUserRequest } from "../interfaces/IUser";
import { BrowserRouter } from 'react-router-dom';


const Login = () => {
    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);



    const loginUser = () => {
        setIsLoggingIn(true)
        setMessage("Logging In ...")
        const data = {
            email,
            password
        } as ILoginUserRequest;
        Api.POST_LoginBusinessUser(data).then(res => {

            setIsLoggingIn(false)
            if (res.error) {
                setMessage(res.message)
            }
            res.result.password = "";

            Cookies.set("suntec-tms-user-id", res.result._id)
            const userInfo = {
                userName: res.result.name,
                email: res.result.email,
                businessName: res.result.businessName
            }
            Cookies.set("suntec-tms-user-info", JSON.stringify(userInfo))

            setMessage("Succesfully logged in")
            console.log("response", res)
            // navigate("/Dashboard", {
            //     state: {
            //         user: data
            //     }
            // })
        })
    }
    return (
        <div>
            {/* <center> */}
            <div className="icon">
                <div className="icon_class">

                </div>
                <div className="text">Sign In</div>
            </div>

            <div className="row">
                <div className="logEmail">
                    <Textfield id="email"
                        className="p-2"
                        type="text"
                        variant="outlined"
                        label="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="logPass">
                    <Textfield id="password"
                        className="p-2"
                        type="text"
                        variant="outlined"
                        label="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/*<Recaptcha
                    sitekey=""
                    render="explicit"
                    onloadCallback={callback}
                />*/}
                <h3>{isLoggingIn ? message : message}</h3>
                <Button
                    variant="contained"
                    className="btnLog"
                    onClick={() => loginUser()}

                >
                    Sign in
                </Button>
            </div>

            {/* 
            <Link to="/Signup" className="ccLog">
                Sign up for free account
            </Link>

            <Link to="/PassChange" className="ccLog">
                Reset password
            </Link> */}

            {/* </center> */}
        </div >
    )
}

export default Login