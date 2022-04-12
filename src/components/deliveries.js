import React from "react";
import {  Card,
          Button,
          TextField,
          Typography,
          Table ,
          Divider,
          TableContainer,
          TableHead,
          TableBody,
          TableRow,
          TableCell,
          makeStyles }
           from "@material-ui/core";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    minHeight: 50
  },
});

function Deliveries() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <>
      <Card>
        <div className="delHeader">
            <div><h3>Deliveries</h3></div>
            <div className="delHeadBtn">
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
              
          <div className="delTbl">
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                </TableRow>
                <TableRow >
                  <div className='delBTNS'>
                  <Button variant="contained" className="delBtn">Remove</Button>
                  <Button 
                          variant="contained" 
                          className="delBtn"
                          onClick={handleClickOpen}
                          >
                            Add del
                  </Button>
                  </div>
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
                    Client
                  </TableCell>
                  <TableCell>
                    Status
                  </TableCell>
                  <TableCell>
                    Time
                  </TableCell>
                  <TableCell>
                    Reasons
                  </TableCell>
                  <TableCell>
                    Photo
                  </TableCell>
                  <TableCell>
                    eSignature
                  </TableCell>
                  <TableCell>
                    name
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow style={{width: 10}}>
                  .
              </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider/>
          </div>
      </Card>
      {/*****************************************************8*/}
      <div className="add-delivery">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Delivery</DialogTitle>
        <DialogContent>
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
          <Button onClick={handleClose} variant='outlined'>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
      </>
    )
}

export default Deliveries
