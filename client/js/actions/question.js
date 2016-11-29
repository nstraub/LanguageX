import actionTypes from './types'
import fetch from 'isomorphic-fetch'
import {post, dispatchSuccess} from './async';

export function submitAnswer(userId, isCorrect) {
    return function (dispatch) {
        dispatch(setFeedback(isCorrect));

        return post('/users/' + userId + '/question', {isCorrect}).
        then(dispatchSuccess(dispatch, actionTypes.SUBMIT_ANSWER_CORRECT));
    }
}


export function getNextQuestion(userId) {
    return function (dispatch) {
        dispatch(clearFeedback());

        return fetch('/users/' + userId + '/question', {credentials: 'include'}).
        then(function (response) {
            return response.json();
        }).
        then(dispatchSuccess(dispatch, actionTypes.GET_NEXT_QUESTION, true));
    }
}

function setFeedback(isCorrect) {
    return {
        type: actionTypes.SET_FEEDBACK,
        isCorrect
    };
}

function clearFeedback() {
    return {
        type: actionTypes.CLEAR_FEEDBACK
    }
}