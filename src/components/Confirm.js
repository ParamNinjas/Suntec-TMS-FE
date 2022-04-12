import React from "react";
import '../App.css';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom"; 




const Confirm = ()  => {
    const location = useLocation()
    console.log("display props", location)
    return (
        <div>
            <Typography variant="h4">Please check your inbox (and spam folder)</Typography>
            <Typography variant="h5">Confirm your email address {location.state.user.email} by clicking Create account</Typography>
            <Link to ="/Signup" className="ccLog">
                   <h5>Sign up for a free account</h5> 
                </Link>
                <Link to ="/" className="ccLog">
                   <h5>Log in</h5> 
                </Link>
        </div>
    )
}

export default Confirm