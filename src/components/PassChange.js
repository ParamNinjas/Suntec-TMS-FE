import React, {useState} from "react";
import '../App.css';
import Textfield from "@material-ui/core/TextField"
import  Button  from "@material-ui/core/Button";
import { Link } from "react-router-dom";
// import apiClient from "../services/apiClient";



const PassChange=()  => {
    const [email,setEmail] = useState("");
    const [confirmPassword,setConfirnPassword] = useState("");
    const [password,setPassword] = useState("");
    const [resetMessage, setResetMessage] = useState("");
    const [passwordChanged, setPasswordChanged] = useState(false);


    const changePassword = () => {
        setPasswordChanged(true)
        setResetMessage("Changing password...")
        const data = {
            email,
            password,
            confirmPassword
        }
        // apiClient.resetPassword(data).then(res => {
        //     setPasswordChanged(false)
        //     if (res.error) {
        //         setResetMessage(res.resetMessage)
        //     }
        //     setResetMessage("Password Succesfully changed")
        // })
       
    }
    return (
        <div>
            <center>
            <div className="icon">
                <div className="icon_class">
                   
                </div>
                <div className="text">Change Password</div>
            </div>

            <div className="row">
                <div className="logEmail">
                    <Textfield id="userEmail"
                            className="p-2" 
                            type="text"  
                            variant="outlined" 
                            label="Enter Email" 
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                </div>
                <div className="logPass">
                    <Textfield 
                            id="newPassword" 
                            className="p-2" 
                            type="text"  
                            variant="outlined" 
                            label="New password" 
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                </div>
                <div className="logPass">
                    <Textfield 
                            id="Confirmpassword" 
                            className="p-2" 
                            type="text"  
                            variant="outlined" 
                            label="Confirm password"
                            onChange={(e)=> setConfirnPassword(e.target.value)}
                            />    
                </div>
                <h3>{passwordChanged  ?  resetMessage : resetMessage }</h3>
                <Button 
                    variant="contained" 
                    className="btnChange"
                    onClick={()=> changePassword()}
                    >
                        Submit
                </Button>
            </div>
            <Link to ="/" className="ccLog">
                   <h5>Log in</h5> 
                </Link>
            
            </center>
        </div>
    )
}

export default PassChange