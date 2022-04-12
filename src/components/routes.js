import React, {Fragment , useState} from "react";
import { CardContent,
          Card,
          Button,
          TextField,
          Grid,
          Table ,
          Divider,
          TableContainer,
          TableHead,
          TableRow,
          TableBody,
          TableCell,
          makeStyles,  
          Typography}
           from "@material-ui/core";
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
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';        
import Slide from '@mui/material/Slide';
import SearchBar from 'search-bar-react'


const useStyles = makeStyles({
  table: {
    minWidth: 700,
    minHeight: 50
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

/*******************************Driver Popup**************************************8 */
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

function Routes() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
/***********************************************************/
    return (
      <>
      <Card>
        <CardContent>
        <div className="routeHead">
          <h3>Routes</h3>
          <div className="route-head-btn">
          <a className="rounded-Send" >
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
        
          <div className="routesTbl">
          <TableContainer>
            <Table className={classes.table}>
              <TableHead >
              <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className="datePickerWrapper">
                <div className="fromPicker">
                  <Typography className="fromTypo">From:</Typography>
                </div>
                <div className="toPicker">
                <Typography className="toTypo">To:</Typography>
                  <Fragment>
           
                  </Fragment>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <div className="smallBtn">
                <div className="btnref">
                  <a className="rounded-Refresh" href="">
                    <ion-icon name="refresh"></ion-icon>
                  </a>
                </div>
                <div>
                  <a className="rounded-Refresh" href="">
                    <ion-icon name="attach"></ion-icon>
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className="routesBtn">
                <div className="routeAdd">
                <Button variant="contained" color="primary" onClick={handleOpenD} className="Addbtn">+ Add route</Button>
                </div>
                <div>
                <Button  variant="contained" className="driveBtn" onClick={handleClickOpen} >Drivers</Button>
                </div>
              </div>
            </Grid>
          </Grid>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{height:10}}>
                    Code
                  </TableCell>
                  <TableCell >
                    Date
                  </TableCell>
                  <TableCell >
                    Ship from
                  </TableCell>
                  <TableCell >
                    Driver
                  </TableCell>
                  <TableCell >
                    Status
                  </TableCell>
                  <TableCell >
                    Time
                  </TableCell>
                  <TableCell >
                    M
                  </TableCell>
                  <TableCell >
                    Track.mi
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider/>
          </div>
        </CardContent>
      </Card>
    <div className="driverTblPopup">
    <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar className="driverTool">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Driver (10 drivers available till 2022.10.22)
            </Typography>
        
          </Toolbar>
        </AppBar>
        <div className="driverpopheader">
          <Button className="btnItem" variant outline>+ New Item</Button>
          <SearchBar />
        </div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="right">Driver</TableCell>
            <TableCell align="right">Vehicle</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Company ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Depot/Ship from</TableCell>
            <TableCell align="right">Home Address</TableCell>
            <TableCell align="right">Zone</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
        </TableBody>
      </Table>
    </TableContainer>
        <Button  variant="outlined" className="closeDriveBtn" onClick={handleClose}>
              Close
            </Button>
      </Dialog>
    </div>
    <div className="RoutePopUp">
    <Dialog
        open={openD}
        onClose={handleCloseD}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Add Route
        </DialogTitle>
        <DialogContent>
        <div className='route-form'>
          <div className='routeCodeDiv'>
              <Typography>Code</Typography>
              <TextField className='code' variant='outlined' size="small"/>
          </div>
          <div className='vehicleDiv'>
              <Typography>Vehicle</Typography>
              <TextField className='Vehicle' variant='outlined'size="small"/>
          </div>
          <div className="phoneDiv">
              <Typography>Phone</Typography>
              <TextField className='phone' variant='outlined' size="small"/>
          </div>
          <div className="dateDiv">
              <Typography>Date</Typography>
              <TextField className='date' variant='outlined' size="small"/>
              <Typography>Time</Typography>
              <TextField className='time' variant='outlined' size="small"/>
          </div>
          <div className="dropdownShip">
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
            <div className="dropdownDriver">
          <Typography>Driver</Typography>
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
          <Button variant="contained" onClick={handleCloseD} className="saveBtn">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
    )
}

export default Routes