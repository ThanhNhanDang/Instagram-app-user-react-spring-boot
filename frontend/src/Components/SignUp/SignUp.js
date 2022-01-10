import React, { Component } from "react";
import { storage, auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      name: null,
      username: null,
      password: null,
    };
  }

  newSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const payload = {
          userId: user.uid,
          userName: this.state.username,
          name: this.state.name,
          profileImage: "",
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8081/api/users", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {});
      })
      .catch((error) => {
        //const errorCode = error.code;
        //alert(error.message);
      });
  };

  render() {
    return (
      <>
        <input
          type="text"
          className="logipage__text"
          placeholder="Mobile Number or Email"
          onChange={(event) => {
            this.state.email = event.currentTarget.value;
          }}
        />
        <input
          type="text"
          className="logipage__text"
          placeholder="Full Name"
          onChange={(event) => {
            this.state.name = event.currentTarget.value;
          }}
        />
        <input
          type="text"
          className="logipage__text"
          placeholder="Username"
          onChange={(event) => {
            this.state.username = event.currentTarget.value;
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
        <button className="login__button" onClick={this.newSignUp}>
          Sign Up
        </button>
      </>
    );
  }
}

export default SignUp;
