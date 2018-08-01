import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">Login</h1>
        </header>
        {users && users.map((user) => (
          <div key={user.id}>
            {user.name}
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ users }, props) {
  return {
    users: Object.values(users)
  };
}

export default connect(mapStateToProps)(Login);