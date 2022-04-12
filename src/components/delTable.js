import React, {useState , useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Typography, TextField } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Moment from 'moment';
import apiClient from '../services/apiClient';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#00C0DA',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

function createData(ID, from, to, date, driver, status) {
    return { ID, from, to, date, driver, status };
  }
  
  const rows = [
    createData('0001', 'Durban', 'Midrand', '12/04/2022',' Zakhele', 'P'),
    createData('0002', 'Cape Town', 'Pretoria', '12/06/2022',' Jimmy', 'D'),
    createData('0003', 'Johannesburg', 'Witbank', '1/05/2022', ' Thabo', 'P'),
    createData('0004', 'Witbank', 'Mhlanga', '12/04/2022', ' Lebo', 'D'),
    createData('0005', 'Vryheid', 'Durban', '31/06/2022', ' Zakhele', 'P'),
    createData('0006', 'Midrand', 'Sandton', '16/11/2022', ' Tim', 'D'),
    createData('0007', 'Durban', 'Midrand', '12/04/2022',' Zakhele', 'P'),
    createData('0008', 'Cape Town', 'Pretoria', '12/06/2022',' Jimmy', 'D'),
    createData('0009', 'Johannesburg', 'Witbank', '1/05/2022', ' Thabo', 'P'),
    createData('0010', 'Witbank', 'Mhlanga', '12/04/2022', ' Lebo', 'D'),
    createData('0011', 'Vryheid', 'Durban', '31/06/2022', ' Zakhele', 'P'),
    createData('0012', 'Midrand', 'Sandton', '16/11/2022', ' Tim', 'D'),
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
/***************************Driver******************************************/
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
/*******************EndOfDriver****************************************/  

const DelTable = () =>{
  const [deliveries, setDeliveries] = useState([])

  const getDeliveries = () => {
    
  
    apiClient.getAllDeliveries().then(res => {
      if(res.error === false){
        const sortedDeliveries = res.result.slice().sort((a,b) => a.date - b.date)
        console.log('sort', sortedDeliveries)
        setDeliveries(sortedDeliveries)
        console.log('delivery list',deliveries)
      }
       
    })
  
}
useEffect(()=> {
  getDeliveries()
},[])


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
/*********************Open Del**************************/
const [openDel, setOpenDel] = React.useState(false);

const handleClickOpenDel = () => {
  setOpenDel(true);
};
const handleCloseDel = () => {
  setOpenDel(false);
};



/**********************************************************/
    const classes = useStyles();

    return (
        <>
        <Typography variant='h3' className='orderhead'>Order list</Typography>
        <div className='orderControl'>
            <Button className="drAdd" variant='outlined'onClick={handleClickOpen}>Add Driver</Button>
            <Button className='delAdd' variant='outlined'onClick={handleClickOpenDel}>Delivery</Button>
            <Button className='ordAdd' variant='outlined'>Order</Button>
        </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Vin No</StyledTableCell>
                  <StyledTableCell>Client ID</StyledTableCell>
                  <StyledTableCell>From</StyledTableCell>
                  <StyledTableCell >To</StyledTableCell>
                  <StyledTableCell >Date</StyledTableCell>
                  <StyledTableCell >Driver</StyledTableCell>
                  <StyledTableCell >Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deliveries.map((delivery,index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {delivery.vinNo}
                    </StyledTableCell>
                    <StyledTableCell>{delivery.clientId}</StyledTableCell>
                    <StyledTableCell>{delivery.from}</StyledTableCell>
                    <StyledTableCell>{delivery.to}</StyledTableCell>
                    <StyledTableCell>{Moment(delivery.date).format("DD-MM-YYYY, HH:MM")}</StyledTableCell>
                    <StyledTableCell>{delivery.driver}</StyledTableCell>
                    <StyledTableCell>{delivery.status === 1 ? "Awaiting collection" : "On route"}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className='driver'>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Driver
        </DialogTitle>
        <DialogContent dividers>
        <div className='driver-form'>
          <div className='driverDiv'>
              <Typography>Driver</Typography>
              <TextField className='driver' variant='outlined' size="small"/>
          </div>
          <div className='vehicleDiv'>
              <Typography>Vehicle</Typography>
              <TextField className='Vehicle' variant='outlined' size="small"/>
          </div>
          <div className='phoneDiv'>
              <Typography>Phone</Typography>
              <TextField className='phone' variant='outlined' size="small"/>
          </div>
          <div className='CompanyIdDiv'>
              <Typography>CompanyID</Typography>
              <TextField className="company" variant='outlined' size="small"/>
          </div>
          <div className="usernameDiv">
            <Typography>username</Typography>
            <TextField className="username" variant='outlined' size="small"/>
          </div>
          <div className='passwordDiv'>
              <Typography>Password</Typography>
              <TextField className='password' variant='outlined' size="small"/>
          </div>
          <div className='homeAdd'>
              <Typography>Home Address</Typography>
              <TextField className="homeAddress" variant='outlined' size="small"/>
          </div>
          <div className="dropdown">
          <Typography>Ship from</Typography>
    
            </div>
        </div>      
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' autoFocus onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
          </div>
          <div className='deliverypop'>
          <Dialog onClose={handleCloseDel} aria-labelledby="customized-dialog-title" open={openDel}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseDel}>
          Add Delivery
        </DialogTitle>
        <DialogContent dividers>
            <div className='driver-form'>
                <div className='codeDiv'>
                    <Typography>Load Number</Typography>
                    <TextField className='code' size='small' variant='outlined'/>
                </div>
                <div className='streetDiv'>
                    <Typography>Deliver to Code</Typography>
                    <TextField className='street' size='small' variant='outlined'/>
                </div>
                <div className='cityDiv'>
                    <Typography>PODType</Typography>
                    <TextField className='city' size='small' variant='outlined'/>
                </div>
                <div className='stateDiv'>
                    <Typography>Fleet No</Typography>
                    <TextField variant='outlined' size='small'/>
                </div>
                <div className='addressDiv'>
                    <Typography>Parking Bay</Typography>
                    <TextField className='address' size='small' variant='outlined'/>
                </div> 
            </div>  
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDel} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
          </div>
          </>
        );

}

export default DelTable;