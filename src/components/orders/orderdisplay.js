import React, { useEffect, useState } from 'react';
import SearchBar from 'search-bar-react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Moment from 'moment';
import { Container } from '@material-ui/core';
import { Link, generatePath, useMatch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import apiClient from '../../services/apiClient';
import CircularProgressWithLabel from '../spinner/spinner';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {  useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { ExportCSV } from '../Reports/exportExcel';
import './orderdisplay.css'



// const Navigate = useMatch();

// console.log("---", generatePath, Navigate)


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: 150,
      backgroundColor:'#f7f7f7'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    body: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    title:{
      fontSize: 20,
      color: "#000",
    },
    order:{
    
    },
  });
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  /*************TABS******************** */
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     backgroundColor: theme.palette.background.paper,
  //     width: 500,
  //   },
  // }));
  /********************************** */


const OrderDis = () => {
    const classes = useStyles();
    const [orders, setOrders] = useState([])
    const [progress, setProgress] = useState(10);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      getOrders()
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
      
      return () => {
        clearInterval(timer);
      };
     
    }, [])

    const getOrders = () => {
    setIsLoading(true);
    apiClient.getAllOrders().then(res => {
        if(res.error === false){
          const sortedOrders = res.result.slice().sort((a,b) => a.date - b.date)
          console.log('sort', sortedOrders)
          setOrders(sortedOrders)
          console.log('order list',orders)
          setIsLoading(false);
        }
         
      })
    
  }



 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    // const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const handleChangeIndex = (index) => {
    setValue(index);
  };

    return (
      isLoading === true ? <div className="spinner"><CircularProgressWithLabel value={progress} /></div> :
      <>
      <Container>
        <div className='cards'>
          <Typography className="currentOrders" variant="h5">
            Active Orders
          </Typography>
          <div className='orderDisBtn'>
          <div className='tags'>
            <div className='search'>
            <SearchBar/>
            </div>
              <div className='filter'>
                <Button variant="outlined" className='btn1' size="small">Filter</Button>
              </div>
              <div className='tag'>
                <Button 
                    variant="outlined" 
                    className='btn1' 
                    onClick={handleClickOpen} 
                    size="small"
                    >
                      New 
                </Button>
                <ExportCSV csvData={orders} fileName={"Orders"} />
              </div>
            </div>
          </div>
           
           
            <div className='displayCards'>
         {
           orders.map((order,id) => (
            <Card className={classes.root} variant="outlined" key={id}>
              <Link 
              to={generatePath(`/Dashboard/:id`, {id})}
              state={order}
              >
            <CardContent >
              <div className='cardTop'>
                <div className='loadNo'>
                <Typography variant="h5" className={classes.title} color="textSecondary" gutterBottom>
                 <span><strong>Load No: 0001</strong></span> 
                </Typography>
                </div>
                
                <Typography className='status' style={order.status !== 2 ? {backgroundColor:'#ffb700',color:"#000"} : {backgroundColor:'#00C0DA'}}>
                  <span className='orderStatus'>{order.status === 0 ? "Awaiting Delivery" : order.status === 1 ? 'On Route' : "Completed"}</span>
                </Typography>
                </div>
                <Typography className='orderNo'>
                   <p>Order No: hjk01</p> 
                </Typography>
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />  
                    </TimelineSeparator>
                    <TimelineContent>
                    <span className='orderDate'>{Moment(order.date).format("Do MMM")}</span>
                     <span className='place'>{order.moreInfo[0].CollectFrom}</span> 

                      </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      {/* <TimelineConnector /> */}
                    </TimelineSeparator>
                    <TimelineContent>
                    <span className='orderDate'>{Moment(order.updatedAt).format("Do MMM")}</span>
                    <span className='place'>{order.moreInfo[0].DeliverTo}</span>
                      </TimelineContent>
                  </TimelineItem>
                </Timeline>
            </CardContent>
            <CardActions>
            </CardActions>
            </Link>
        </Card>
           ))
            
}
            </div>
        </div>
        <div className="newOrder">
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          New Order
        </DialogTitle>
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
                  size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='clientID' 
                    variant='outlined'
                    label='Client ID' 
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='VinNo' 
                    variant='outlined'
                    label='Vin No' 
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='ordType'
                    label='order type' 
                    variant='outlined' 
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField className='ordStat'label="Order Status" variant='outlined' size="small"/>
              </div>
              </div>
              <div className='ord2'>
              <div className='stDiv'>
                <TextField 
                    className='ordTime' 
                    variant='outlined'
                    label='Time' 
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='reasons' 
                    variant='outlined'
                    label='Reason' 
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='photo' 
                    variant='outlined' 
                    label='Photo'
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='eSignature' 
                    variant='outlined' 
                    label='eSignature'
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='name' 
                    label='Name'
                    variant='outlined' 
                    size="small"/>
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
                  label='Type Ref' 
                  size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                className='delVendor' 
                variant='outlined'
                label='Vendor' 
                size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                className='delModel' 
                variant='outlined'
                label='Model' 
                size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                  className='delBody' 
                  variant='outlined' 
                  label='Body No'
                  size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='delColour' 
                    variant='outlined'
                    label='Colour' 
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='delVin' 
                    variant='outlined'
                    label='Vin No' 
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                  className='delLoaddet' 
                  variant='outlined'
                  label='Load Details' 
                  size="small"/>
                </div>
              </div>
              <div className='del2'>
              <div className='stDiv'>
                <TextField 
                className='vehicleType' 
                variant='outlined'
                label='Vehicle Type' 
                size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                className='collectfromCode' 
                variant='outlined'
                label='Collect From Code' 
                size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                  className='collectfrom' 
                  variant='outlined'
                  label='Collect From' 
                  size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                  className='delToCode' 
                  variant='outlined' 
                  label='Deliver To Code'
                  size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                className='DelTo' 
                variant='outlined'
                label='Deliver To' 
                size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                  className='collectFrom' 
                  variant='outlined' 
                  label='collect From Code'
                  size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                  className='dateCreated' 
                  variant='outlined' 
                  label='Date Created'
                  size="small"/>
              </div>
              </div>
            </div>
        </TabPanel>
      </SwipeableViews>
        </DialogContent>
        <DialogActions>
          <Button 
              autoFocus onClick={handleClose}
              variant='outlined'>
            Save 
          </Button>
        </DialogActions>
      </Dialog>
        </div>
        </Container>
        </>
    )
}
export default OrderDis;