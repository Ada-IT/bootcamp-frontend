import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import App from './App';
import Search from './Search';
import User from './User';
import Followers from './Followers';
import Following from './Following';
import Repos from './Repos';

var routes = (
  <Router>
    <App>
        <Route exact path="/" component={Search}/>
        <Route path="/user/:username" component={User}/>
        <Route path="/user/:username/followers" component={Followers}/>
        <Route path="/user/:username/following" component={Following}/>
        <Route path="/user/:username/repos" component={Repos}/>
    </App>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
