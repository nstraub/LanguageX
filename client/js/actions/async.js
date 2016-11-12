import fetch from 'isomorphic-fetch';
import actionTypes from './types';

function asyncSuccess(actionType, payload) {
    return {
        type: actionTypes.SERVER_SUCCESS,
        payload: {
            type: actionType,
            payload: payload || {}
        }
    }
}

export function dispatchSuccess(dispatch, action, includeResponse) {
    return function (response) {
        dispatch(asyncSuccess(action, includeResponse ? response : null));
    }
}

export function post(url, body) {
    return fetch(url,
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body)
      });
}