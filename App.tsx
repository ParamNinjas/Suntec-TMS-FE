import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ContentCut,ContentPaste,ContentCopy,Cloud} from '@mui/icons-material';

import { Grid,Container, MenuList,MenuItem, ListItemIcon,ListItemText, Typography,Divider} from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const section = {
  paddingTop: 5,
  backgroundColor: "#fff"
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
<Grid  container spacing={3}>
  <Grid item xs>

      <Item style={section} >
      <Paper sx={{ maxWidth: '100%', marginTop: "20%", paddingBottom: "50%",  height: "100%" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
    </Item>
    
  
  </Grid>

  <Grid item xs>
  <Paper sx={{ maxWidth: '100%', marginTop: "5%"}}>
    <Item style={section}>
    <Timeline position="alternate">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Secondary</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="success" />
    </TimelineSeparator>
    <TimelineContent>Success</TimelineContent>
  </TimelineItem>
 
</Timeline></Item>
</Paper>
<Paper sx={{ maxWidth: '100%',  marginTop: "5%"}}>
    <Item style={section}>
    <Timeline position="alternate">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Secondary</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="success" />
    </TimelineSeparator>
    <TimelineContent>Success</TimelineContent>
  </TimelineItem>
 
</Timeline></Item>
</Paper>

<Paper sx={{ maxWidth: '100%',  marginTop: "5%"}}>
    <Item style={section}>
    <Timeline position="alternate">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Secondary</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="success" />
    </TimelineSeparator>
    <TimelineContent>Success</TimelineContent>
  </TimelineItem>
 
</Timeline></Item>
</Paper>


  </Grid>
  <Grid item xs={6}>
    <Item style={section}>xs=6</Item>
  </Grid>
</Grid>

    </div>
  );
}

export default App;
