import React from 'react';
import Question from './question';
import Answer from './answer';
import Feedback from './feedback';
import {connectWithDispatch} from '../utils/connector';
import {getNextQuestion} from '../actions/question';

const Main = React.createClass({
    componentWillMount: function () {
        this.props.getQuestion();
    },
    render: function () {
        return (
          <div>
              <Question propList={['current.question']}/>
              <Answer propList={['current.answer']}/>
              <Feedback propList={['feedback']}/>
              <button onClick={this.props.getQuestion}>next</button>
          </div>
        )
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