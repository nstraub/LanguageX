import actions from '../actions/types';

export function currentQuestion(state, action) {
    switch (action.type) {
    case actions.GET_NEXT_QUESTION:
        return action.payload;
    default:
        return state;
    }
}

export function feedback(state, action, answer) {
    switch(action.type) {
    case actions.SET_FEEDBACK:
        return action.isCorrect ? 'correct' : 'incorrect, correct is ' + answer;
    case actions.CLEAR_FEEDBACK:
        return null;
    default:
        return state;
    }
}