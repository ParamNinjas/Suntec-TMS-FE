import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Box, Tab, Tabs, AppBar, Typography} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import {  useTheme } from '@material-ui/core/styles';
// import apiClient from '../../../services/apiClient';
import CircularProgressWithLabel from '../../spinner/spinner';
import moment from 'moment';

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

const DriverDialog =  (props) => {
  const theme = useTheme();
  //console.log("popup", props, order?.orderInfo?._id);
  
  //console.log("Driver", props.drivers.result)
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [message, setMessage] = React.useState('');
  const [progress, setProgress] = useState(10);
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    _id:props?.order?._id
  });
  const [order, setOrder] = React.useState(props.order);
  const drivers = props?.drivers?.result;


  const updateOrder = async (e) => {
    setIsLoading(true)
    setMessage("Updating Order...")
    console.log("order to update", values)


    // await apiClient.updateOrder(values).then(response => {
    //   if(response.error){
    //     setMessage("Error updating order")
    //   }
    //   else{
   
    //     setIsLoading(false)
    //     const timer = setInterval(() => {
    //       setMessage('Order successfully updated!')
    //       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    //     }, 5000);

       

    //     return () => {
    //       clearInterval(timer);
    //     };
    //   }
  
    // })
  }


  const handleClickOpen = () => {
    setOrder(props.order)
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (ev, newValue) => {
    console.log("select", ev.target.value, newValue)
    setValues({...values, ['driver']:  ev.target.value})
    console.log("updated", values)
  }

  const handleTextFieldChange = name => e => {
    setValues({...values, [name]: e.target.value})
    console.log("values", values)
  }



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Order</DialogTitle>
        <DialogContent dividers>
        {/* <AppBar position="static" color="default"> */}
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Order" {...a11yProps(0)} />
          <Tab label="Delivery" {...a11yProps(1)} />
        </Tabs>
      {/* </AppBar> */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className='orderTab'>
            <div className='ord1'>
              <div className='stDiv'>
                <TextField 
                  className='ordNo' 
                  variant='outlined'
                  label='Order No'
                  id='orderNo'
                  defaultValue={order?.orderNo} 
                  onChange = {handleTextFieldChange('orderNo')}
                  size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='clientID' 
                    variant='outlined'
                    label='Client ID' 
                    size="small"
                    type='text'
                    onChange = {handleTextFieldChange('clientId')}
                    defaultValue={order?.clientId} 
                    />
              </div>
              <div className='stDiv'>
                <TextField 
                    className='VinNo' 
                    variant='outlined'
                    label='Vin No' 
                    value={order?.vinNo} 
                    onChange = {handleTextFieldChange('vinNo')}
                    readOnly={true}
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='ordType'
                    label='Order type' 
                    variant='outlined' 
                    value={order?.type}
                    onChange = {handleTextFieldChange('type')}
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                className='ordStat'
                label="Order Status" 
                variant='outlined' 
                size="small"  
                value={order?.status} 
                onChange = {handleTextFieldChange('status')}
                />
              </div>
              </div>
              <div className='ord2'>
              <div className='stDiv'>
                <TextField 
                    className='ordTime' 
                    variant='outlined'
                    label='Time' 
                    size="small"
                    type='date'
                    dateFormat="MM/dd/yyyy"
                    defaultValue={moment(order?.date).locale('en').format('YYYY-MM-DD')}
                    onChange={handleTextFieldChange('date')}
                  
                    />
              </div>

              {/* <div className='stDiv'>
                <TextField 
                    className='ordTime' 
                    variant='outlined'
                    label='Time' 
                    size="small"
                    type='date'
                    dateFormat="MM/dd/yyyy"
                    value={moment(order?.time).locale('en').format('YYYY-MM-DD HH:mm:ss')}
                    onChange={handleTextFieldChange('time')}
                  
                    />
              </div> */}
              
              <div className='stDiv'>
                <TextField 
                    className='reasons' 
                    variant='outlined'
                    label='Reason'
                    value={order?.reason}
                    onChange = {handleTextFieldChange('reason')}
                    size="small"/>
              </div>

              <div className='stDiv'>
                <div>Assign Driver</div>
                <select 
                  className='dropdownItem' 
                  variant='outlined' 
                  label='Date Created'
                  size="medium"
                  onChange={e => handleInputChange(e)}
                 >
                     {/* <option value=''>Lance</option>
                     <option value=''>Keny</option> */}
                 {
                   drivers?.map((driver, index) => (
                   
                    <option value={driver._id}>{driver.name}</option>
                   ))
                 }
                    </select>
              </div>

         
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className='DeliveryTab'>
          <div className='del1'>
              <div className='stDiv'>
                <TextField 
                  className='delType' 
                  variant='outlined'
                  label='Sapaction' 
                  size="small"
                  value={order?.moreInfo[0]?.TypeRef?.Sapaction2} 
                  onChange = {handleTextFieldChange('VehicleType')}
                  />
              </div>
              <div className='stDiv'>
                <TextField 
                className='delVendor' 
                variant='outlined'
                label='Vendor' 
                value={order?.moreInfo[0]?.Vendor?.VendorName} 
                onChange = {handleTextFieldChange('VendorName')}
                size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                className='delModel' 
                variant='outlined'
                label='Model' 
                value={order?.moreInfo[0]?.Model?.ModelDesc} 
                onChange = {handleTextFieldChange('ModelDesc')}
                size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                  className='delBody' 
                  variant='outlined' 
                  label='Body No'
                  size="small"
                  value={order?.moreInfo[0]?.BodyNo} 
                  onChange = {handleTextFieldChange('BodyNo')}
                  BodyNo
                  />
              </div>
              <div className='stDiv'>
                <TextField 
                    className='delColour' 
                    variant='outlined'
                    label='Colour' 
                    size="small"
                    value={order?.moreInfo[0]?.Colour?.ColourDesc} 
                    onChange = {handleTextFieldChange('ColourDesc')}
                    />
              </div>
              <div className='stDiv'>
                <TextField 
                    className='delVin' 
                    variant='outlined'
                    label='Vin No' 
                    size="small"
                    value={order?.moreInfo[0]?.VINNo} 
                    onChange = {handleTextFieldChange('VINNo')}
                    />
              </div>
              <div className='stDiv'>
                <TextField 
                  className='delLoaddet' 
                  variant='outlined'
                  label='Load No' 
                  size="small"
                  value={order?.moreInfo[0]?.LoadDetails?.LoadNo} 
                  onChange = {handleTextFieldChange('LoadNo')}
                  />
                </div>
              </div>
              <div className='del2'>
              <div className='stDiv'>
                <TextField 
                className='vehicleType' 
                variant='outlined'
                label='Vehicle Type' 
                size="small"
                value={order?.moreInfo[0]?.VehicleType} 
                onChange = {handleTextFieldChange('VehicleType')}
                />
              </div>
              <div className='stDiv'>
                <TextField 
                className='collectfromCode' 
                variant='outlined'
                label='Collect From Code' 
                size="small"
                value={order?.moreInfo[0]?.CollectFromCode} 
                onChange = {handleTextFieldChange('CollectFromCode')}
                />
              </div>
              <div className='stDiv'>
                <TextField 
                  className='collectfrom' 
                  variant='outlined'
                  label='Collect From' 
                  size="small"
                  value={order?.moreInfo[0]?.CollectFrom} 
                  onChange = {handleTextFieldChange('CollectFrom')}
                  />
              </div>
              <div className='stDiv'>
                <TextField 
                  className='delToCode' 
                  variant='outlined' 
                  label='Deliver To Code'
                  size="small"
                  value={order?.moreInfo[0]?.DeliverToCode} 
                  onChange = {handleTextFieldChange('DeliverToCode')}
                  />
              </div>
              <div className='stDiv'>
                <TextField 
                className='DelTo' 
                variant='outlined'
                label='Deliver To' 
                size="small"
                value={order?.moreInfo[0]?.DeliverTo} 
                onChange = {handleTextFieldChange('DeliverTo')}
                />
              </div>
              <div className='stDiv'>
                <TextField 
                  className='collectFrom' 
                  variant='outlined' 
                  label='Collect From Code EXT'
                  size="small"
                  value={order?.moreInfo[0]?.CollectFromCode_Ext} 
                  onChange = {handleTextFieldChange('CollectFromCode_Ext')}
                  />
              </div>
              <div className='stDiv'>
                <TextField 
                  className='dateCreated' 
                  variant='outlined' 
                  label='Date Created'
                  size="small"
                  type='date'
                  dateFormat="MM/dd/yyyy"
                  defaultValue={moment(order?.moreInfo[0]?.TypeRef?.Date).locale('en').format('YYYY-MM-DD')}
                  onChange={handleTextFieldChange('Date')}
                  />
              </div>
            
              </div>
            </div>
        </TabPanel>
      </SwipeableViews>
        </DialogContent>
        <DialogActions>
        {isLoading === true ? <div className="">{message}<CircularProgressWithLabel value={progress} /></div> : 
        <>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateOrder}>Save</Button>
          </>
                }
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DriverDialog;