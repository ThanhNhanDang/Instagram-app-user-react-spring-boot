import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage";
import InfoSection from "../InfoSection/InfoSection";
import Suggestions from "../Suggestions/Suggestions";
export class MainContent extends Component {
  render() {
    return <div>
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={6}>
                <div>
                    <StatusBar />
                    <MainPage />
                </div>
            </Grid>
            <Grid item xs={2}>
              <InfoSection />
              <Suggestions />
            </Grid>
            <Grid item xs={2}>12</Grid>   
        </Grid>
    </div>;
  }
}

export default MainContent;
