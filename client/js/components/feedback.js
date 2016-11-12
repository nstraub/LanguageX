import React from 'react';
import {connectTo} from '../utils/connector';

const Feedback = React.createClass({
    render: function () {
        return (
          <div id="feedback">
              <h1>{this.props.feedback}</h1>
          </div>
        )
    }
});

export default connectTo(Feedback);