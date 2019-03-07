import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Fourpointone from './Fourpointone';
import NoMatch from './NoMatch';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter >

    <div>

      <Route path="/" component={App}></Route>
      <Route path="/One" component={One}></Route>
      <Route path="/Two" component={Two}></Route>
      <Route path="/Three" component={Three}></Route>
      <Route path="/Four" component={Four}>
        <Route path="/Four/:id" component={Fourpointone}></Route>
      </Route>


    </div>
  </BrowserRouter>

  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

  //<Route path="*" exact component={NoMatch}></Route>
