import React, { Component } from 'react';
import logo from '../../res/logo.svg';
import mainpic from '../../res/stevencousinmikey.jpg';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
          <div>
              Header
          </div>
        <div>
          {this.props.children}
        </div>
      </div>
      
    );
  }
}

export default Header;
