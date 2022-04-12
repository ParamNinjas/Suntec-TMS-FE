import React, {useState} from 'react';
import { Button, Typography, TextField} from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import avator from '../../assets/profile.png'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './Customer.css'

const columns = [
  {   field: 'avatar', 
  headerName: '', 
  width: 70,
  renderCell: (params) => <img src={avator} alt='avator' width='20px'/>

},
  { field: 'id', headerName: 'Code', width: 90 },
  {
    field: 'contactPerson',
    headerName: 'Contact Person',
    width: 210,
    editable: true,
  },
  {
    field: 'contactNo',
    headerName: 'Contact number',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'email',
    width: 210,
    editable: true,
  },
  {
    field: 'cod',
    headerName: 'COD',
    editable: true,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'firstName') || ''} ${
    //     params.getValue(params.id, 'lastName') || ''
    //   }`,
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
    width: 190,
    editable: true,
  },
];

const rows = [
  { id : '001', contactPerson: 'Jim street', contactNo: '0110987654',email : 'street@BMW.co.za', cod: '',companyName: 'BMW' },
  { id : '002', contactPerson: 'Thato Mhlanga', contactNo: '0114537654',email : 'Mhlanga@toyota.co.za', cod: '',companyName: 'Toyota' },
  { id : '003', contactPerson: 'Lethu Khoza', contactNo: '0117897654',email : 'khoza@hundai.co.za', cod: '',companyName: 'Hundai' },
  { id : '004', contactPerson: 'Jabu Mntungwa', contactNo: '0110007654',email : 'Mntungwa@merc.co.za', cod: '',companyName: 'Mercedes' },
  { id : '005', contactPerson: 'Will Smith', contactNo: '0110557654',email : 'smith@kia.co.za', cod: '',companyName: 'Kia' },
];

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


const Customer =() => {
    // const [code, setCode] = useState("");
    // const [contactPerson, setContactPerson] = useState("");
    // const [contactNo, setContactNo] = useState("");
    // const [email, setEmail] = useState("");
    // const [code, setCode] = useState("");
    // const [contactPerson, steContactPerson] = useState("");

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className='cust-container'>
           <Typography variant='h3'>Customers</Typography>
            <div className='buttons'>
                <Button variant='outlined'onClick={handleClickOpen} className='cust-Add'>Add</Button>
            </div>
            <div style={{ height: 400, width: '100%' }}>
             
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  // checkboxSelection
                  disableSelectionOnClick
                />
            </div>
            <div className='driverPopup'>
                  <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                      Add Customer
                    </DialogTitle>
                    <DialogContent dividers>
                    <div className='stDiv'>
                <TextField 
                  className='cusCode' 
                  variant='outlined'
                  label='Customer Code' 
                  size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='contactP' 
                    variant='outlined'
                    label='Contact Person' 
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='contactNo' 
                    variant='outlined'
                    label='contact No' 
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='cusEmail'
                    label='Customer email' 
                    variant='outlined' 
                    size="small"/>
              </div>
              <div className='stDiv'>
                <TextField 
                    className='cusCompany'
                    label='Company Name' 
                    variant='outlined' 
                    size="small"/>
              </div>
                    </DialogContent>
                    <DialogActions>
                      <Button 
                      autoFocus 
                      onClick={handleClose}
                      variant='outlined'
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
            </div>

          </div>
    )

}
export default Customer;