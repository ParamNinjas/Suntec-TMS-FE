import React, {useState, useEffect} from 'react';
// import apiClient from '../../services/apiClient'; 
import { useNavigate } from "react-router-dom";
import { FormGroup } from '@mui/material';
import { Button, Paper, Container, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import './Create.css';

const Create = () => {
    const navigate = useNavigate();
    const [touched,setTouched] = useState("");
    const [message,setMessage] = useState("");
    const [values, setValues] = useState({
        "Sapaction2": "ZIDI",
        "VehicleType": "NEW",
        "LoadNo": "LOC52259",
        "FleetNo": "HF26",
        "CollectFromCode": "VDC",
        "CollectFrom": "BMW Vehicle Distribution Centre, Rosslyn",
        "DeliverToCode": "09660",
        "DeliverTo": "CAPITAL MOTORS",
        "CollectFromCode_Ext": "00000",
        "VINNo": "WBAKB82050CY55495",
        "Date": "2022-03-23",
        "Time": "10:24:10",
        "orderNo": "12323",
        "clientId":"1232343454",
        "type": "String",
        "date": "",
        "status": 2,
        "reasons": "dsadsadsadsa",
        "photo": "https://sadsadsd",
        "eSignature": "Malatsasdsasdsa",
        "name": "MAse"
    });

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value });
        // was the field modified
        setTouched({
            ...touched,
            [name]: true,
        });



        console.log("name", e.target.value, values)
    };

    const handleCreateEmployee = (e) => {
        setMessage("loading")
        e.preventDefault();
        // apiClient.createOrder(values).then(res => {
        //     if (res.error) {
        //         setMessage(res.message)
        //     }
        //     setMessage("Succesfully Created")
        //     console.log("response",res)
        //     navigate("/Dashboard")
        // })
        }
    

    return(
        <>
        <Container>

        <Grid container spacing={0}  className="gridcontainr">
              <Grid item xs={12} sm={12} md={1} lg={1}>
       
              </Grid>
            <Grid item xs={12} sm={12} md={11} lg={11} className="orderCard" >        
            <center><h2>Create Order</h2>  </center>
            <Paper>
            <form onSubmit={handleCreateEmployee}>
            <div className="FormGroup">
                <label htmlFor="Sapaction2" className='fLabel'> Sapaction2 </label>
                <TextField
                    required
                    data-testid="first-name"
                    className="FormGroup"
                    id="Sapaction2"
                    type="text"
                    defaultValue={values.Sapaction2}
                    onChange={handleChange('Sapaction2')} />
            </div>

            <div className="FormGroup">
                <label htmlFor="VehicleType" className='fLabel'> VehicleType </label>
                <TextField
                    required
                    data-testid="last-name"
                    className="form-control"
                    id="VehicleType"
                    type="text"
                    defaultValue={values.VehicleType}
                    onChange={handleChange('VehicleType')} />
            </div>

            <div className="form-group">
                <label htmlFor="LoadNo" className='fLabel'> LoadNo </label>
                <TextField
                    required
                    data-testid="phone-no"
                    className="form-control"
                    id="LoadNo"
                    type="text"
                    defaultValue={values.LoadNo}
                    onChange={handleChange('LoadNo')} />
            </div>

            <div className="form-group">
                <label htmlFor="FleetNo" className='fLabel'> FleetNo  </label>
                <TextField
                    required
                    data-testid="email"
                    className="form-control"
                    id="FleetNo"
                    type="text"
                    defaultValue={values.FleetNo}
                    onChange={handleChange('FleetNo')} />
            </div>

            <div className="form-group">
                <label htmlFor="CollectFromCode" className='fLabel'> CollectFromCode </label>
                <TextField
                    required
                    data-testid="date-of-birth"
                    className="form-control"
                    id="CollectFromCode"
                    type="text"
                    defaultValue={values.CollectFromCode}
                    onChange={handleChange('CollectFromCode')} />
            </div>

            <div className="form-group">
                <label htmlFor="CollectFrom" className='fLabel'> CollectFrom </label>
                <TextField
                    required
                    data-testid="date-of-birth"
                    className="form-control"
                    id="CollectFrom"
                    type="text"
                    defaultValue={values.CollectFrom}
                    onChange={handleChange('CollectFrom')} />
            </div>

            <div className="form-group">
                <label htmlFor="DeliverToCode" className='fLabel'> DeliverToCode </label>
                <TextField
                    required
                    data-testid="date-of-birth"
                    className="form-control"
                    id="DeliverToCode"
                    type="text"
                    defaultValue={values.DeliverToCode}
                    onChange={handleChange('DeliverToCode')} />
            </div>

            <div className="form-group">
                <label htmlFor="DeliverTo" className='fLabel'> DeliverTo </label>
                <TextField
                    required
                    data-testid="date-of-birth"
                    className="form-control"
                    id="DeliverTo"
                    type="text"
                    defaultValue={values.DeliverTo}
                    onChange={handleChange('DeliverTo')} />
            </div>

            <div className="form-group">
                <label htmlFor="CollectFromCode_Ext" className='fLabel'> CollectFromCode_Ext </label>
                <TextField
                    required
                    data-testid="date-of-birth"
                    className="form-control"
                    id="CollectFromCode_Ext"
                    type="text"
                    defaultValue={values.CollectFromCode_Ext}
                    onChange={handleChange('CollectFromCode_Ext')} />
            </div>

            <div className="form-group">
                <label htmlFor="VINNo" className='fLabel'> VINNo </label>
                <TextField
                    required
                    data-testid="date-of-birth"
                    className="form-control"
                    id="VINNo"
                    type="text"
                    defaultValue={values.VINNo}
                    onChange={handleChange('VINNo')} />
            </div>

            <div className="form-group">
                <label htmlFor="Date" className='fLabel'> Date </label>
                <TextField
                    required
                    data-testid="date-of-birth"
                    className="form-control"
                    id="Date"
                    type="text"
                    defaultValue={values.Date}
                    onChange={handleChange('Date')} />
            </div>

            <div className="form-group">
                <label htmlFor="clientId" className='fLabel'> clientId </label>
                <TextField
                    required
                    data-testid="date-of-birth"
                    className="form-control"
                    id="clientId"
                    type="text"
                    defaultValue={values.clientId}
                    onChange={handleChange('clientId')} />
            </div>

            <div className="form-group">
                <label htmlFor="status" className='fLabel'> status </label>
                <TextField
                    required
                    data-testid="date-of-birth"
                    className="form-control"
                    id="status"
                    type="text"
                    defaultValue={values.status}
                    onChange={handleChange('status')} />
            </div>

            <div className="form-group">
                <label htmlFor="name" className='fLabel'> name </label>
                <TextField
                    required
                    data-testid="date-of-birth"
                    className="form-control"
                    id="name"
                    type="text"
                    defaultValue={values.name}
                    onChange={handleChange('name')} />
            </div>
          
            <br/>

           <center> <div className="m-2 d-flex justify-content-end">
            {message === 'loading' ? "Creating Order..." : 
                <button
                    type="submit"
                    data-testid="submit-btn"
                    className="btn btn-primary"
                >
                    Save
                </button>
                } 
            </div>
            </center>

        </form>
        <br/>
        </Paper>                      
            </Grid> 
        </Grid>
        </Container>
           
        </>
    )

}

export default Create

