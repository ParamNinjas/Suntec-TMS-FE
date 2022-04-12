import React from 'react';
import { MapLanding } from './landinMap';
import {Button,
        TextField,
        Grid, 
        Typography
        } from "@material-ui/core";
        import Dialog from '@material-ui/core/Dialog';
        import DialogActions from '@material-ui/core/DialogActions';
        import DialogContent from '@material-ui/core/DialogContent';
        import DialogTitle from '@material-ui/core/DialogTitle';
        import Paper from '@material-ui/core/Paper';
        import Draggable from 'react-draggable'; 
        import { useTheme } from '@mui/material/styles';
        import OutlinedInput from '@mui/material/OutlinedInput';
        import InputLabel from '@mui/material/InputLabel';
        import MenuItem from '@mui/material/MenuItem';
        import FormControl from '@mui/material/FormControl';
        import Select from '@mui/material/Select';         

        
        

function LandingPopUp() {

    return (
        <div className='landingPopup'>
            <h2>Set the address of your depot or office</h2>
            <hr/>
            <Grid container spacing={2}>  
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className='landing-form'>
                            <div className='codeDiv'>
                                <Typography>Code</Typography>
                                <TextField className='code' variant='outlined'/>
                            </div>
                            <div className='streetDiv'>
                                <Typography>Street</Typography>
                                <TextField className='street' variant='outlined'/>
                            </div>
                            <div className='cityDiv'>
                                <Typography>City</Typography>
                                <TextField className='city' variant='outlined'/>
                            </div>
                            <div className='stateDiv'>
                                <Typography>State/Province/Country</Typography>
                                <TextField variant='outlined'/>
                                <Typography>Postal Code</Typography>
                                <TextField variant='outlined'/>
                            </div>
                            <div className='addressDiv'>
                                <Typography>Full Address</Typography>
                                <TextField className='address' variant='outlined'/>
                            </div>
                            <div className='long-lat'>
                                <Typography>Latitude</Typography>
                                <TextField variant='outlined'/>
                                <Typography>Longitude</Typography>
                                <TextField className='longitude' variant='outlined'/>
                            </div> 
                    </div>      
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <MapLanding/>
                </Grid>
            </Grid>
            <hr/>
            <Button variant='contained'>Save</Button>
        </div>
    )
}
export default LandingPopUp