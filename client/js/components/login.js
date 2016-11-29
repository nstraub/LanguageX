import React from 'react';
import {Link} from 'react-router';

const Login = React.createClass({
    render: function () {
        return (
          <div>
              <a href="/auth/google">login</a>
          </div>
        )
    }
});

export default Login;