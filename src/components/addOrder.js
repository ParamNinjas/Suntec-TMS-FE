import * as React from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import {  Typography,
          TextField,
          Grid,
          Table ,
          TableContainer,
          TableHead,
          TableRow,
          TableCell,
          makeStyles,
          TableBody
         } from "@material-ui/core";
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    minHeight: 50
  },
});

export default function AddOrder() {
  const classes = useStyles();
  return (
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
              <div className='orderdateDiv'>
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
                  </div>
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
  );
}
