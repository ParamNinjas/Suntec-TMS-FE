import React from "react";
import {Typography, Button, Container} from '@material-ui/core';


function loadCapacity() {
    return (
      <div>
        <Container>
          <div className="loadTop">
            <Typography>CL O2 GB GP</Typography>
            <p>on way</p>
            <Button><ion-icon name="arrow-dropdown"/>Call</Button>
            <Button>Email</Button>
          </div>
        </Container>
      </div>
    )
}

export default loadCapacity