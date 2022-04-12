import React from "react";
import SearchBar from 'search-bar-react'
import {  Card,
          Button,
          Table ,
          Divider,
          Grid,
          TextField,
          TableContainer,
          TableHead,
          TableBody,
          styled,
          IconButton,
          TableRow,
          TableCell,
          makeStyles, 
          Typography}
           from "@material-ui/core";
import { MapLanding } from "./landingMap";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable'; 
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; 
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import useMediaQuery from '@mui/material/useMediaQuery';       


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    minHeight: 100
  },
});


/*********************************************
 * Drop down
 ***********************************/
 const names = [
  'Sandton',
  'Midrand',
  'Centurion',
];
 function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
  
    },
  },
};
/**********************************AddOrder Popup*****************************************/
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paperWidthSm': {
    maxWidth: 989
},
}));

/***********************************************************************************8 */


function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}



function Orders() {
  const classes = useStyles();
  /* popUp handleclick */
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openD, setOpenD] = React.useState(false);

  const handleOpenD = () => {
    setOpenD(true);
  };

  const handleCloseD = () => {
    setOpenD(false);
  };
  const [openC, setOpenC] = React.useState(false);

  const handleOpenC = () => {
    setOpenC(true);
  };

  const handleCloseC = () => {
    setOpenC(false);
  };

  /***************AddOrder Popup*************** */
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  const [openOrd, setOpenOrd] = React.useState(false);

  //  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const handleOrdOpen = () => {
    setOpenOrd(true);
  };
  const handleCloseOrd = () => {
    setOpenOrd(false);
  };
  /**************Drop down********************** */

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
    return (
      <>
      <Card>
        <div className="orderTblHead">
          <div><h3>Orders</h3></div>
          <div className="ordTbleHeadBtn">
            <a className="rounded-Send" href="">
              <ion-icon name="send"></ion-icon>
            </a>
            <a className="rounded-Print" href="">
              <ion-icon name="print"></ion-icon>
            </a>
            <a className="rounded-Download" href="">
              <ion-icon name="download"></ion-icon>
            </a>
          </div>
        </div>
         <div className="order-grid">
         <Grid container spacing={2}>
            <div className="Btn-Order">
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Button variant="contained"
                        className="ordBtn"
                        onClick={handleClickOpen}
                        >+ Add Order</Button>
              </Grid>
            </div>
            <div className="importDiv"> 
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <a className="rounded-attach" href="">
                <ion-icon name="attach"></ion-icon>
                </a>
              </Grid>
            </div>
            <div className="showDiv">
              <Grid item xs={12} sm={12} md={3} lg={3}>
              {/*    <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
                  <Typography>Show</Typography>
                  <a className="rounded-Pin" href="">
                    <ion-icon name="pin"></ion-icon>
    </a> */}
              </Grid>
            </div>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <SearchBar/>
              </Grid>
          </Grid>
         </div>
          <div className="orderTbl">   
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                
                </TableRow>
                <TableRow>
                  <TableCell>
                    Type
                  </TableCell>
                  <TableCell>
                    Order No
                  </TableCell>
                  <TableCell>
                    Date
                  </TableCell>
                  <TableCell>
                    (0) Client
                  </TableCell>
                  <TableCell>
                    (0) Address
                  </TableCell>
                  <TableCell>
                    Depay/Ship
                  </TableCell>
                  <TableCell>
                    Zone
                  </TableCell>
                </TableRow>
                <TableRow>
                  .
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          <Divider/>
          </div>
      </Card>
{/************************************************

 Address Pop Up

**************************************************/}
      <div className="LandingPopUp">
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
        <h2>Set the address of your depot or office</h2>
            <hr/>
            <Grid container spacing={2}>  
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className='landing-form'>
                            <div className='codeDiv'>
                                <Typography>Code</Typography>
                                <TextField className='code' size="small" variant='outlined'/>
                            </div>
                            <div className='streetDiv'>
                                <Typography>Street</Typography>
                                <TextField className='street' size="small" variant='outlined'/>
                            </div>
                            <div className='cityDiv'>
                                <Typography>City</Typography>
                                <TextField className='city' size="small" variant='outlined'/>
                            </div>
                            <div className='stateDiv'>
                                <Typography>State/Province/Country</Typography>
                                <TextField variant='outlined' size="small"/>
                                <Typography>Postal Code</Typography>
                                <TextField variant='outlined' size="small"/>
                            </div>
                            <div className='addressDiv'>
                                <Typography>Full Address</Typography>
                                <TextField className='address' variant='outlined' size="small"/>
                            </div>
                            <div className='long-lat'>
                                <Typography>Latitude</Typography>
                                <TextField variant='outlined' size="small"/>
                                <Typography>Longitude</Typography>
                                <TextField className='longitude' variant='outlined' size="small"/>
                            </div> 
                    </div>      
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <MapLanding/>
                </Grid>
            </Grid>
            <hr/>
            <Button variant='contained' onClick={handleOpenD}>Save</Button>
        </DialogContent>
      </Dialog>
      </div>

{/************************************************

Driver Pop Up

**************************************************/}
      <div className="driverPopUp">
      <Dialog
        open={openD}
        onClose={handleCloseD}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Add your first driver (mobile application user)
        </DialogTitle>
        <DialogContent>
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
            <FormControl sx={{ m: 1, width: 300 }}>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                size="small"
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </div>
        </div>     
        </DialogContent>
        <DialogActions>
          <hr/>
          <Button 
              variant="contained" 
           //   onClick={handleCloseD} 
              className="saveBtn"
              onClick={handleOrdOpen}
              >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </div>
{/************************************************

Add order Pop Up

**************************************************/}
      <div className="addOrd">
      <BootstrapDialog
        // fullScreen={fullScreen}
        onClose={handleCloseOrd}
        aria-labelledby="customized-dialog-title"
        open={openOrd}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseOrd}>
          Add your first order
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <div className='orderPopup'>
        <TabsUnstyled defaultValue={0}>
          <TabsListUnstyled>
            <TabUnstyled>Main</TabUnstyled>
            <TabUnstyled>Additional</TabUnstyled>
          </TabsListUnstyled>
          <TabPanelUnstyled value={0}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className='orderDiv'>
                      <Typography>Order No</Typography>
                      <TextField className='oderNo' size="small" variant='outlined'/>
                      <Typography>Type</Typography>
                      <Select variant='outlined' size="small" />
                  </div>
                  <div className='clientDiv'>
                      <Typography>Client</Typography>
                      <Select variant='outlined'/>
                  </div>
                  <div className='addDiv'>
                      <Typography>Address</Typography>
                      <TextField variant='outlined' size="small" />
                    </div>
                    <div className='contactNamediv'>
                      <Typography>Contact Name</Typography>
                      <TextField variant='outlined' size="small"/>
                    </div>
                  <div className='conNumDiv'>
                      <Typography>Contact Phone</Typography>
                      <TextField className='conNum' size="small" variant='outlined'/>
                  </div>
                  <div className='EmailDiv'>
                      <Typography>Email</Typography>
                      <TextField className='conEmail' size="small" variant='outlined'/>
                      </div>
                      <div className='GoodsDiv'>
                      <Typography>Goods</Typography>
                      <Select variant='outlined'/>
                  </div> 
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
              {/* <div className='orderdateDiv'>
                      <Typography>Order Date</Typography>
                      <TextField className='oderDate' size="small" variant='outlined'/>
                  </div>
                  <div className='shipperDiv'>
                      <Typography>Shipper</Typography>
                      <Select variant='outlined'/>
                  </div>
                  <div className='depDiv'>
                      <Typography>deposit/ship from</Typography>
                      <Select variant='outlined'/>
                  </div>
                  <div className='weightDiv'>
                      <Typography>Weight</Typography>
                      <Select variant='outlined'/>
                      <Typography>Volume</Typography>
                      <Select variant='outlined'/>
                    </div>
                    <div className='CODdiv'>
                    <Typography>Pallets</Typography>
                      <TextField variant='outlined' size="small"/>
                      <Typography>COD</Typography>
                      <TextField variant='outlined' size="small"/>
                    </div>
                  <div className='conNumDiv'>
                      <Typography>Contact Phone</Typography>
                      <TextField className='conNum' variant='outlined' size="small"/>
                  </div>
                  <div className='noteDiv'>
                      <Typography>Note</Typography>
                      <TextField className='note' variant='outlined' size="small" />
                      </div>
                      <div className='QtyDiv'>
                      <Typography>Qty</Typography>
                      <Select variant='outlined'/>
                      <Typography>Price</Typography>
                      <Select variant='outlined'/>
                  </div> */}
              </Grid>
            </Grid> 
            <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell style={{width: 300}}>

                  </TableCell >
                  <TableCell style={{width: 100}}>
                    Name
                  </TableCell>
                  <TableCell style={{width: 300}}>
                  
                  </TableCell>
                  <TableCell>
                    Unit
                  </TableCell>
                  <TableCell>
                    Qty
                  </TableCell>
                  <TableCell>
                    Price
                  </TableCell>
                  <TableCell>
                  
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow style={{height: 100}}>

                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={1}>
        
          <div className='PriorityDiv'>
              <Typography>Priority</Typography>
              <TextField className='priority' variant='outlined' size="small"/>
          </div>
          <div className='BarcodeDiv'>
              <Typography>Barcode</Typography>
              <TextField className='city' variant='outlined' size="small"/>
          </div>
          <div className='timeDiv'>
              <Typography>Time from</Typography>
              <TextField variant='outlined' size="small"/>
              <Typography>Timetill</Typography>
              <TextField variant='outlined'size="small"/>
          </div>
          <div className='Palletsp2div'>
              <Typography>Pallets</Typography>
              <TextField className='palets' variant='outlined'size="small"/>
          </div>
          </TabPanelUnstyled>
        </TabsUnstyled>
    </div>
        </DialogContent>
        <DialogActions>
          <Button>Settings</Button>
          <Button autoFocus onClick={handleCloseOrd}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
      </div>
      </>
    )
}

export default Orders
