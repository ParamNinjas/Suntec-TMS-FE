import React from 'react'
import './css/navigation.css'
import { Button } from '@material-ui/core'
import SearchBar from 'search-bar-react'



const Navigation = () =>{
   
	
    return(
        <nav className='nav1'>
            <ul>
                <li><SearchBar /></li>
                <li><Button className="SubsBtn" 
                            variant="contained"
                            >
                              Subscribe
                    </Button>
                </li>
                <li><Button className="infoBtn">info</Button></li>
                <li>Company ID<a className="rounded-Drop" >
                <ion-icon name="arrow-dropdown"></ion-icon>
              </a></li>
                <li>  <a className="rounded-Help" >
                <ion-icon name="help"></ion-icon>
              </a>Help</li>
              <li>  <a className="rounded-Help" >
              <ion-icon name="globe"></ion-icon>
              </a>EN<a className="rounded-Drop" >
                <ion-icon name="arrow-dropdown"></ion-icon>
              </a></li>
                <li>  <a className="rounded-Settings" >
                <ion-icon name="settings"></ion-icon>
              </a>Settings</li>
            </ul>
        </nav>
    )
}
export default Navigation