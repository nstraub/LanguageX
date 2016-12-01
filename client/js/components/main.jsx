import React from 'react';

import Question from './question.jsx';
import Answer from './answer.jsx';
import Feedback from './feedback.jsx';

import {connectWithDispatch} from '../utils/connector';
import {getNextQuestion} from '../actions/question';


const Main = React.createClass({
    componentWillMount: function () {
        this.props.getQuestion();
    },
    render: function () {
        return (
            <div>
                <Question propList={['current.question']} />
                <Answer propList={['current.answer']} />
                <Feedback propList={['feedback']} />
                <button id="next-question" onClick={this.props.getQuestion}>Next Question</button>
            </div>
        );
    }
});


const mapDispatchToProps = function (dispatch) {
    return {
        getQuestion: function (userId) {
            dispatch(getNextQuestion(userId));
        }
    };
};


export default connectWithDispatch(mapDispatchToProps)(Main);