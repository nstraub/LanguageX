import React from 'react';
import Question from './question';
import Answer from './answer';
import Feedback from './feedback'

const Main = React.createClass({
    render: function () {
        return (
          <div>
              <Question question="Sample question"/>
              <Answer/>
              <Feedback feedback="some feedback for you"/>
          </div>
        )
    }
});

export default Main;