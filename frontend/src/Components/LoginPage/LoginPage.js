import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid";
import inst_image from "../../images/9364675fb26a.svg";
import inst_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  changeLogin = () => {
    this.state.isLogin
      ? this.setState({ isLogin: false })
      : this.setState({ isLogin: true });
  };

  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage__main">
              <div>
                <img alt="inst_image" src={inst_image} width="450px" />
              </div>
              <div>
                <div className="loginpage__rightcomponent">
                  <img
                    alt="inst_logo"
                    className="loginpage__logo"
                    src={inst_logo}
                  />
                  <div className="loginPage__signin">
                    {this.state.isLogin ? <SignIn /> : <SignUp />}
                    <div className="login__ordiv">
                      <div className="login__dividor"></div>
                      <div className="login__or">OR</div>
                      <div className="login__dividor"></div>
                    </div>

                    <div className="login__fb">
                      <img
                        alt="facebook"
                        src={fb}
                        width="15px"
                        style={{ marginRight: "5px" }}
                      />
                      Log in with Facebook
                    </div>
                    <div className="login_forgt">Forgot password?</div>
                  </div>
                </div>

                <div className="loginpage__signupoption">
                  {this.state.isLogin ? (
                    <div className="loginPage__signin">
                      Don't have an account?{" "}
                      <span onClick={this.changeLogin}>Sign up</span>
                    </div>
                  ) : (
                    <div className="loginPage__signup">
                      Have an account?{" "}
                      <span onClick={this.changeLogin}>Sign in</span>
                    </div>
                  )}
                </div>
                <div className="loginPage__downloadSection">
                  <div>Get the app.</div>
                  <div className="loginPage__option">
                    <img
                      alt="appstore"
                      className="loginPage_dwimg"
                      src={appstore}
                      width="136px"
                    />
                    <img
                      alt="playstore"
                      className="loginPage_dwimg"
                      src={playstore}
                      width="136px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </>
    );
  }
}

export default LoginPage;
