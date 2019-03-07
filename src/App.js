import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Router Richard Kalibbala!</h2>
        </header>

        <ul>
          <li><Link to="/One">Page One</Link></li>
          <li><Link to="/Two">Page Two</Link></li>
          <li><Link to="/Three">Page Three</Link></li>
          <li><Link to="/Four">Page Four</Link></li>
        </ul>

      </div>
    );
  }
}

export default App;
