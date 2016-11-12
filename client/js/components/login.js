import React from 'react';
import {Link} from 'react-router';

const Login = React.createClass({
    render: function () {
        return (
          <div>
              <Link to="/main">login</Link>
          </div>
        )
    }
});

export default Login;