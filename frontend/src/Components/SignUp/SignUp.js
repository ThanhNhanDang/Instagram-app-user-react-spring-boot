import React, { Component } from "react";
export class SignUp extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          className="logipage__text"
          placeholder="Mobile Number or Email"
        />
         <input
          type="text"
          className="logipage__text"
          placeholder="Full Name"
        />
         <input
          type="text"
          className="logipage__text"
          placeholder="Username"
        />
        <input
          type="password"
          className="logipage__text"
          placeholder="Password"
        />
        <button className="login__button">Sign Up</button>
      </>
    );
  }
}

export default SignUp;
