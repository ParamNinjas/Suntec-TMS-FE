import React from "react";
import {  Card,
          Button,
          Table ,
          TableBody,
          Divider,
          TableContainer,
          TableHead,
          TableRow,
          TableCell,
          makeStyles }
           from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    minHeight: 50
  },
});

function Sites() {
  const classes = useStyles();
    return (
      <Card>
          <div className="siteHeadCon" >
            <h3>Sites</h3>
            <div className="siteBtn">
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
          <div className="siteTblBtn">
                      <Button variant="contained" className="optBtn">Optimize</Button>
                      <Button variant="contained" className="optBtn">preview</Button>
                    </div>
          <div className="sitesTbl">
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow style={{height: 10}}>
                  <TableCell style={{width: 10}}>
                    No.
                  </TableCell>
                  <TableCell>
                    Address
                  </TableCell>
                  <TableCell>
                    Client
                  </TableCell>
                  <TableCell>
                    Arrived
                  </TableCell>
                  <TableCell>
                    Departed
                  </TableCell>
                  <TableCell>
                    ETA
                  </TableCell>
                  <TableCell>
                    mi
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow style={{height: 10}}>

                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider/>
          </div>
       
      </Card>
    )
}

export default Sites
