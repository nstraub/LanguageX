import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Main from "./components/main";
import Login from "./components/login";

console.log(`Client running in ${process.env.NODE_ENV} mode`);

render(
  (
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/main" component={Main}/>
    </Router>
  ),
  document.getElementsByTagName('main')[0]
);