import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Typography,TextField, Button} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import moment from 'moment';
import DriverDialog from '../Drivers/popup/Driver';
import apiClient from '../../services/apiClient';


import './moreInfo.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
  

const MoreInfo = (props) => {

    const order = props.orderInfo;
    console.log("p", order)

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState(order);
    const [driver, setDriver] = useState({});



  const [drivers, setDrivers] = useState([]);




  const getAllDrivers = async () => {
    const allDrivers = await apiClient.getDrivers();
    console.log("Drivers", allDrivers)
    setDrivers(allDrivers)
    const getAssignedDriver = drivers.result.filter(driver => driver._id === order.driver)
    setDriver(getAssignedDriver[0])
    console.log("driver", driver);
  }





    useEffect(() => {
      getAllDrivers();
    }, [order]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    const handleClickOpen = () => {
      setValues(order)
      setOpen(true);
    };

    console.log("values", values)
  

    return (
        order?.orderInfo === null ? <div className='OrderInfo'><h3>Please select an order for more infomation</h3></div> :
      
        <div className='infoDisplay'>
        <div className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Order details" {...a11yProps(0)} />
              <Tab label="Driver Information" {...a11yProps(1)} />
              <Tab label="Vehicle" {...a11yProps(2)} />
              <Tab label="Customer" {...a11yProps(3)} />
            </Tabs>
          <TabPanel value={value} index={0}>
          <div className='infoDriver'>
              <div className='formFields'>
              <div className="textFields">
                <TextField
                    variant='outlined'
                    label='Load No'
                    value={order?.moreInfo[0]?.LoadDetails?.LoadNo}
                    size="small"/>
                </div>
                <div className="textFields">
                <TextField 
                    variant='outlined'
                    label='No. of Orders' 
                    value={order?.moreInfo?.length}
                    size="small"/>
                  </div>
                  <div className="textFields">
                  <TextField 
                    variant='outlined'
                    label='Destination' 
                    value={order?.moreInfo[0]?.DeliverTo}
                    size="small"/>
                  </div>
                  <div className="textFields">
                  <TextField 
                    type="date"
                    variant='outlined'
                    label='Arrival Date' 
                    dateFormat="MM/dd/yyyy"
                    value={moment(order?.updatedAt).locale('en').format('YYYY-MM-DD')}
                    size="small"/>
                  </div>
                
              </div>

              {/* businessName: "Radical"
companyId: "8785004"
createdAt: "2022-04-01T09:20:32.993Z"
homeAddress: "270"
id: "6246c3e0cd2bc863655338a1"
isActive: true
name: "Kenny"
otp: ""
password: "Admin"
phone: "08934543543"
shipFrom: ""
updatedAt: "2022-04-01T09:20:32.993Z"
username: "@2342323"
vehicle: "H2"
__v: 0
_id: "6246c3e0cd2bc863655338a1" */}
          
            </div> 
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className='infoDriver'>
            <div className='formFields'>
              <div className="textFields">
                <TextField
                    variant='outlined'
                    label='Name'
                    value={driver?.name}
                    size="small"/>
                </div>
                <div className="textFields">
                <TextField 
                    variant='outlined'
                    label='Company' 
                    value={driver?.businessName}
                    size="small"/>
                  </div>
                  <div className="textFields">
                  <TextField 
                    variant='outlined'
                    label='Phone' 
                    value={driver?.phone}
                    size="small"/>
                  </div>
                  <div className="textFields">
                  <TextField 
                    variant='outlined'
                    label='Address'
                    value={driver?.homeAddress}
                    size="small"/>
                  </div>
                  <div className="textFields">
                  <TextField 
                    variant='outlined'
                    label='Vehicle'
                    value={driver?.vehicle}
                    size="small"/>
                  </div>
                
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <div className='infoVehicle'>
              <Typography className='vhreg'>Reg No:</Typography>
              <div className='vhList'>
              <Typography className='vin'>Vin Number</Typography>
              <Typography className='vhLoad'>Load Number</Typography>
              <Typography className='vhDriver'>Driver</Typography>
              <Typography className='vhDeparture'>Departure time</Typography>
              </div>
              </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <div className='infoDriver'>
              <Typography className='drName'>Name:</Typography>
              <div className='drList'>
              <Typography className='drExp'>Experiance</Typography>
              <Typography className='drLic'>Licence class</Typography>
              <Typography className='drID'>ID numer</Typography>
              <Typography className='drInsurence'>Insurance Number</Typography>
              </div>
            </div>
          </TabPanel>
              {/* <Button 
              className='tabBtn'
              variant="outlined" 
              size="small"
              onClick={e => handleChangeByButton(e, value)}
              >
                Next 
              </Button> */}
               <DriverDialog openDialog={handleClickOpen} order={order} drivers={drivers}/>
          
            
           
        </div>
        </div>
  
    )
}

export default MoreInfo