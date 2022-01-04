import React, { Component } from "react";
import "./Navbar.css";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import insta_logo from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import love from "../../images/love.svg";
import avatar from "../../images/avatar.jpg";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar__barContent">
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <img className="navbar__logo" src={insta_logo} width="105px" />
            </Grid>
            <Grid item xs={3}>
                <input type="text" className="navbar__searchBar" placeholder="Search"/>
            </Grid>
            <Grid item xs={4} style={{"display": "flex"}}>
            <img className="navbar__img" src={home} width="25px"/>
            <img className="navbar__img" src={message} width="25px"/>
            <img className="navbar__img" src={find} width="25px"/>
            <img className="navbar__img" src={love} width="25px"/>
            <Avatar alt="User" src={avatar} className="navbar__img__avatar navbar__img" />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Navbar;
