import React, { Component } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { storage, auth } from "../firebase";
export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        //console.log(error)
        //alert(error.message);
      });
  };

  render() {
    return (
      <>
        <input
          type="text"
          className="logipage__text"
          placeholder="Phone number, username, or email"
          onChange={(event) => {
            this.state.email = event.currentTarget.value;
          }}
        />
        <input
          type="password"
          className="logipage__text"
          placeholder="Password"
          onChange={(event) => {
            this.state.password = event.currentTarget.value;
          }}
        />
        <button className="login__button" onClick={this.login}>
          Log In
        </button>
      </>
    );
  }
}

export default SignIn;
