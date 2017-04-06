import React, { Component } from 'react';
import logo from '../../res/logo.svg';
import mainpic from '../../res/stevencousinmikey.jpg';
import '../App.css';

class MainApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Rago</h2>
        </div>
        <p className="App-intro">
          Hello! And welcome to Rago's World.
        </p>
        <img src={mainpic} height="400px" width="400px"/>
      </div>
    );
  }
}

export default MainApp;
