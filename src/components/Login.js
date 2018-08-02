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
      <div className="login">
        <div className="container">
          <header className="app-header">
            <h1 className="app-title">Login as&hellip;</h1>
          </header>
          <div className="card-deck">
          {users && users.map((user) => (
            <div className="card text-center" key={user.id} onClick={(e) => { this.handleLogin(user.id); }}>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <div><img className="rounded" src={user.avatarURL} alt={user.name} height="100" /></div>
              </div>
            </div>
          ))}
          </div>
        </div>
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