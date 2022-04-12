import React, {useState, useEffect} from 'react';
// import apiClient from '../../services/apiClient'; 
import { useNavigate } from "react-router-dom";
import { FormGroup } from '@mui/material';
import { Button, Paper, Container, Grid } from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
	Link
} from 'react-router-dom';

import DriverDialog from './popup/Driver';

import avator from '../../assets/profile.png'

import './Drivers.css';

const Drivers = () => {

    const [drivers, setDrivers] = useState([]); 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };



    useEffect(() => {
        // getDrivers()
    },[])

    // const getDrivers = async () => {
    //     const result = await apiClient.getDrivers()
    //     console.log("Drivers", result);
    //     const driverResponse = result.error === true ? [] : result.result;
    //     setDrivers(driverResponse); 
    //     console.log("Drivers", drivers)
    // } 

 

    const columns = [
        {   field: 'avatar', 
            headerName: '', 
            width: 70,
            renderCell: (params) => <img src={avator} width='20px'/>
        
        },
        { field: 'id', headerName: 'ID', width: 120,  valueFormatter: (params) => params.value},
        { field: 'name', headerName: 'Driver', width: 130 },
        { field: 'businessName', headerName: 'Business Name', width: 130 },
        { field: 'phone', headerName: 'Driver', width: 130 },
        { field: 'homeAddress', headerName: 'Address', width: 130 },
        { field: 'vehicle', headerName: 'Vehicle',type: 'number',width: 90},
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.businessName || ''} ${params.row.name || ''}`,
        // },
      ];

    //   name: string,
    //   vehicle: string,
    //   phone: string,
    //   companyId: string,
    //   username: string,
    //   password: string,
    //   homeAddress: string,
    //   shipFrom: string,
    //   isActive: boolean,
    //   otp: string,
    //   businessName: string,

    return(
        <>
       <Container>
        <Grid container spacing={0}  className="gridcontainr">
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
            <Grid item xs={12} sm={12} md={11} lg={11} className="container" > 
            <center><h2>Drivers</h2> </center>
            <Button color='primary'  onClick={handleClickOpen}>ADD NEW</Button>
            <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Driver</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={drivers}
                    columns={columns}
                />
            </div>
            </Grid>
        </Grid>
        </Container>
        </>
    )
}

export default Drivers;