import React from "react";
import { Grid, Container } from '@material-ui/core';
import MapContainer from './components/routeMap';
import Orders from './components/orders';
import Sites from './components/sites';
import Deliveries from './components/deliveries';
import Nav from "./components/nav";
import Navigation from "./components/navigation";
import Load from "./components/load";
import Prog from "./components/prog";
import Routes from './components/routes';
import {useLocation} from "react-router-dom"; 


function Dashboard() {
    const location = useLocation()
    console.log('dash location', location)
    return(
        <>
        <Container>
        <Navigation/>
        <div className="container"> 
        <Nav/>
        <hr/> 
         <Grid container spacing={2} className="containr">
            <Grid item xs={12} md={12} lg={6} className="dash1">
                <Prog/>
                <Routes/>
                <Sites/>
                <Deliveries/>
                <Orders/>
            </Grid> 
            <Grid item xs={12} md={12} lg={6} className="dash2" >
                <Grid item xs={12} md={6} lg={6}> 
                    <Load bgcolor="purple" progress='50' width={10} height={90}/>     
                    <MapContainer/>
                </Grid> 
                                
            </Grid>
            </Grid>
        </div>
        </Container>
        </>
    )
}

export default Dashboard