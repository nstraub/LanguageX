import React from 'react';
import {connectWithDispatch} from '../utils/connector';
import {submitAnswer} from '../actions/question';

const Answer = React.createClass({
    render: function () {
        return (
          <div className="QnA-segment">
              <input type="text" ref="answer" />
              <input type="button" onClick={this.checkAnswer} value="Submit Answer"/>
          </div>
        )
    },
    isAnswerCorrect: function () {
        return this.props.answer.toLowerCase() === this.refs.answer.value.toLowerCase();
    },
    checkAnswer: function () {
        this.props.submitAnswer(this.isAnswerCorrect());
    }
});

const mapDispatchToProps = function (dispatch) {
    return {
        submitAnswer: function (userId, isCorrect) {
            dispatch(submitAnswer(userId, isCorrect))
        }
    };
};

export default connectWithDispatch(mapDispatchToProps)(Answer);