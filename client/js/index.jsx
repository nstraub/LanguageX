import 'babel-polyfill';

import React from 'react';
import thunk from 'redux-thunk';

import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory} from 'react-router';

import Main from './components/main.jsx';
import Login from './components/login.jsx';
import reducer from './reducers/reducers';

render(
  (
      <Provider store={createStore(reducer, applyMiddleware(thunk))} >
          <Router history={browserHistory}>
              <Route component={Login} path="/" />
              <Route component={Main} path="/main" />
          </Router>
      </Provider>
  ),
  document.getElementsByTagName('main')[0]
);