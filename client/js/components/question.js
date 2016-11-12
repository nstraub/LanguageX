import React from 'react';

const Question = React.createClass({
    render: function () {
        return (
          <div className="QnA-segment">
              {this.props.question}
          </div>
        )
    }
});

export default Question;