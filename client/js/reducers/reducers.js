import actions from '../actions/types';
import initialState from './initialState';

import {currentQuestion, feedback} from './main';


function isServerResponse(type) {
    return type === actions.SERVER_SUCCESS;
}

export default function reducer(state, action) {
    if (!state) { return initialState; }

    if (isServerResponse(action.type)) { return reducer(state, action.payload); }

    return {
        user: state.user,
        current: currentQuestion(state.current, action),
        feedback: feedback(state.feedback, action, state.current.answer)
    };
}