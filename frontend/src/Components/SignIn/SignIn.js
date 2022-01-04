import React, { Component } from "react";

export class SignIn extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          className="logipage__text"
          placeholder="Phone number, username, or email"
        />
        <input
          type="password"
          className="logipage__text"
          placeholder="Password"
        />
        <button className="login__button">Log In</button>
      </>
    );
  }
}

export default SignIn;
