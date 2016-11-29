import React from 'react';
import {connectTo} from '../utils/connector';

const Question = React.createClass({
    render: function () {
        return (
          <div id="question" className="QnA-segment">
              What's english for "{this.props.question}"?
          </div>
        )
    }
});

export default connectTo(Question);