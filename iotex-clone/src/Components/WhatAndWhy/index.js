import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";

import "./index.css";

export default class InvestorHero extends Component {
  render() {
    return (
      <div className="what_and_why">
        <Container>
          <Grid container alignItems="baseline">
            <Grid item sm={12} lg={6} md={6}></Grid>
            <Grid item sm={12} lg={6} md={6}>
              <div className="section">
                <h1 className="heading">What is IOTX?</h1>
                <p className="description">
                  The IOTX token connects the physical and digital world. Our
                  rapidly evolving ecosystem aims to put billions of devices on
                  the blockchain. IOTX is the lifeblood of this ambitious,
                  interconnected, and profitable future.
                </p>
              </div>
            </Grid>
            <Grid item sm={12} lg={6} md={6}>
              <div className="section">
                <h1 className="heading">Why IOTX?</h1>
                <p className="description">
                  IoTeX is the premier blockchain network on the market that
                  brings the idealistic power of blockchain to devices, Dapps,
                  and NFTs.
                </p>
              </div>
            </Grid>
            <Grid item sm={12} lg={6} md={6}></Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
