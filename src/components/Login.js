import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  handleLogin(id) {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(id));
  }
  render() {
    const { users } = this.props;

    return (
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">Login</h1>
        </header>
        {users && users.map((user) => (
          <div key={user.id} onClick={(e) => { this.handleLogin(user.id); }}>
            <img src={user.avatarURL} alt={user.name} width="100" />
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