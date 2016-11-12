import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Main from "./components/main";
import Login from "./components/login";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducers';
import thunk from 'redux-thunk';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

render(
  (
    <Provider store={createStore(reducer, applyMiddleware(thunk))} >
        <Router history={browserHistory}>
            <Route path="/" component={Login}/>
            <Route path="/main" component={Main}/>
        </Router>
    </Provider>
  ),
  document.getElementsByTagName('main')[0]
);