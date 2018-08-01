import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="app">
        <LoadingBar />
        <div className="top-navigation">
          <div className="container">
            <ul>
              <li className="col-12 col-md-3"><a href="/">Home</a></li>
              <li className="col-12 col-md-3"><a href="/add">New Question</a></li>
              <li className="col-12 col-md-3"><a href="/leaderboard">Leader Board</a></li>
              <li className="col-12 col-md-3"><a href="/">User. Logout</a></li>
            </ul>
          </div>
        </div>
        <div className="container">
          <header className="app-header">
            <h1 className="app-title">H1</h1>
          </header>
          <p className="app-intro">
            Text.
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);