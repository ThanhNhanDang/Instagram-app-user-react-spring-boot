import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <LoginPage/>
        {/* <HomePage/> */}
      </div>
    );
  }
}

export default App;
