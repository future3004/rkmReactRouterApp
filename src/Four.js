import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Four extends Component {
  render(){
    return(
      <div>

        <h1>This is Page Four.</h1>
        <ul>
          <li><Link to="/Four/123">version: FourPointOne</Link></li>
        </ul>

        {this.props.children}

      </div>
      );
    }
  }

  export default Four;
