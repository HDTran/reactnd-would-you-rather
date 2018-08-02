import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends Component {
  handleLogout() {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="top-navigation">
        <div className="container">
          <ul>
            <li className="col-12 col-md-3"><NavLink to='/' exact activeClassName='active'>Home</NavLink></li>
            <li className="col-12 col-md-3"><NavLink to='/add' exact activeClassName='active'>New Question</NavLink></li>
            <li className="col-12 col-md-3"><NavLink to='/leaderboard'>Leader Board</NavLink></li>
            {this.props.authedUser && (
              <li className="col-12 col-md-3 nav-logout" onClick={(e) => { this.handleLogout(); }}>({this.props.authedUser.name}) Logout</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser ? users[authedUser]: null
  }
}

export default withRouter(connect(mapStateToProps)(Nav));