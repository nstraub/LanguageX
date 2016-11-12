import React from 'react';
import connectWithDispatch from '../utils/connector';

const Feedback = React.createClass({
    render: function () {
        return (
          <div id="feedback">
              <h1>{this.props.feedback}</h1>
          </div>
        )
    }
});

export default connectWithDispatch()(Feedback);