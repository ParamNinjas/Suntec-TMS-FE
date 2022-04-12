import React, {useState, useEffect}  from "react";
import '../App.css';
import Textfield from "@material-ui/core/TextField"
import  Button  from "@material-ui/core/Button";
import { Link, Navigate } from "react-router-dom";
import {  PersonAdd } from "@material-ui/icons";
// import { POST } from "../services/client";
// import apiClient from "../services/apiClient" 
import { useNavigate } from "react-router-dom"; 
 


const Signup=()  => {
    const navigate = useNavigate();
    const [businessName,setBusinessName] = useState("");
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [email,setEmail] = useState("");
    const [salt,setSalt] = useState("");
    const [password,setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [verified, setVerified] = useState(false);

   

    const createUser = () => {
        setStatus(false);
        const data = {
            businessName,
            name,
            surname,
            email,
            salt,
            password,
            verified
        }
        // apiClient.registerBusinessUser(data).then(res => {
        //     setStatus(true);
        //   //  console.log("response",res)
        //     navigate("/Confirm",{ state : {
        //         user : data
        //     } })
        // })

    }

    return (
        <div>
            <center>
            <div className="icon">
                <div className="icon_class">
                    <PersonAdd fontSize="large"/>
                </div>
                <div className="text">Create New Account</div>
            </div>

            <div className="row">
                <div className="companyName">
                
                    <Textfield 
                        id="companyname" 
                        className="r-1" 
                        type="text"  
                        variant="outlined" 
                        label="Enter Company name"
                        value={businessName}
                        onChange={(e)=> setBusinessName(e.target.value)}
                    />
                </div>
                <div className="name">
                    <Textfield 
                        id="name" 
                        className="r-1" 
                        type="text"  
                        variant="outlined" 
                        label="Enter your name"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="name">
                    <Textfield 
                        id="surname" 
                        className="r-1" 
                        type="text"  
                        variant="outlined" 
                        label="Enter your surname"
                        value={surname}
                        onChange={(e)=> setSurname(e.target.value)}
                    />
                </div>
                <div className="email">
                    <Textfield  
                        id="email" 
                        className="r-1" 
                        type="text"  
                        variant="outlined" 
                        label="Enter your email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                {/* <div className="name">
                    <Textfield 
                        id="salt" 
                        className="r-1" 
                        type="text"  
                        variant="outlined" 
                        label="Enter SALT"
                        value={salt}
                        onChange={(e)=> setSalt(e.target.value)}
                    />
                </div> */}
                <div className="password">
                    <Textfield 
                        id="password" 
                        className="r-1" 
                        type="text"  
                        variant="outlined" 
                        label="Enter your password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <h5>{status === true ? 'Successfully Registered' : status === false ? 'Creating...' : ''}</h5>
                </div>
                    <Button 
                        variant="contained" 
                        className="btnLog"
                        onClick={()=> createUser()}
                        >
                            Create my account
                    </Button>
                
            </div>
            <p className="text-center">
                <Link to ="\Login" className="ccLog">
                   By clicking "Create my account" you agree to our terms of use
                </Link>
            </p>
            <p className="text-center">
            <Link to ="/" className="ccLog">
                   <h5>Log in</h5> 
                </Link>
            </p>
            </center>
        </div>
    )
}

export default Signup