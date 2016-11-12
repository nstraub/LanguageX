import React from 'react';
import {connectTo} from '../utils/connector';

const Question = React.createClass({
    render: function () {
        return (
          <div className="QnA-segment">
              {this.props.question}
          </div>
        )
    }
});

export default connectTo(Question);