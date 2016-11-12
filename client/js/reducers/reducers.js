import actionTypes from '../actions/types';

const initialState = {
    user: {
        username: "dave",
        _id: "5823dacf070e412748f610b5"
    },
    current: {
        question: null,
        answer: null
    },
    feedback: null
};

export default function reducer(state, action) {
    switch(action.type) {
        case actionTypes.SERVER_SUCCESS:
            return reducer(state, action.payload);
        case actionTypes.GET_NEXT_QUESTION:
            return Object.assign({}, state, {current: action.payload});
        case actionTypes.SET_FEEDBACK:
            return Object.assign({}, state, {feedback: action.isCorrect ? 'correct' : 'incorrect, correct is ' + state.current.answer});
        case actionTypes.SUBMIT_ANSWER_CORRECT:
            return state;
        default:
            return initialState;
    }
}