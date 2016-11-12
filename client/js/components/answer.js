import React from 'react';

const Answer = React.createClass({
    render: function () {
        return (
          <div className="QnA-segment">
              <input type="text" ref="answer" />
              <input type="button" onClick={this.checkAnswer} value="Submit Answer"/>
          </div>
        )
    },
    checkAnswer: function () {
        throw 'not implemented';
    }
});

export default Answer;