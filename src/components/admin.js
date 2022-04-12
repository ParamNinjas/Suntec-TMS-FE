 import React from "react";
 import {  
    Button,
    Typography,
    TextField,
} from "@material-ui/core";
import Navigation from "./navigation";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

 function Admin() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
return ( 
    <div className="profile">
    <Navigation/>
        <center>
        <h1>Admin Profile </h1>
        <img
            src="/img/profilepic.jpg"
            alt="profile-pic"
            className="profile-pic"
        />
        <div className="AdminInfo">
            <Typography>Company name : Testing Inc </Typography>
            <Typography>Company ID : 2893746 </Typography>
            <Typography className='adminName' >Name : James </Typography>
            <Typography>Surname : Doe </Typography>
            <Typography>Title :Logistics Manager </Typography>
        </div>
        <div className="adminBtns">
            <Button 
                variant="outlined" 
                className="adminEdit"
                onClick={handleClickOpen}
                >
                    Edit
            </Button>
        </div>

        </center>
       { /************************************************************** */}
    <div className="editPop-up">
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Admin profile</DialogTitle>
        <DialogContent>
        <div className='adComNameDiv'>
              <Typography>Company name</Typography>
              <TextField className='adComName' variant='outlined' size="small"/>
          </div>
        <div className='adminNameDiv'>
              <Typography>Name</Typography>
              <TextField className='adName' variant='outlined' size="small"/>
          </div>
          <div className='adSurnameDiv'>
              <Typography>Surname</Typography>
              <TextField className='adminSurname' variant='outlined'size="small"/>
          </div>
          <div className="admintitleDiv">
              <Typography>Title</Typography>
              <TextField className='adminTitle' variant='outlined' size="small"/>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" className="adminSave">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
   
)
 }

 export default Admin;