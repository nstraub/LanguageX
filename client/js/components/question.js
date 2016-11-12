import React from 'react';
import connectWithDispatch from '../utils/connector';

const Question = React.createClass({
    render: function () {
        return (
          <div className="QnA-segment">
              {this.props.question}
          </div>
        )
    }
});

export default connectWithDispatch()(Question);