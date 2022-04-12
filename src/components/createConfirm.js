import React from "react";
import './App.css';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";




const CreateConfirm=()  => {
    return (
        <div>
            <Typography variant="h4">Your account has been successfully created!</Typography>
            <Typography variant="h5">Please use your email and password that you used to create your account</Typography>
                <Link to ="\Login" className="ccLog">
                   <h5>Log in</h5> 
                </Link>
        </div>
    )
}

export default CreateConfirm