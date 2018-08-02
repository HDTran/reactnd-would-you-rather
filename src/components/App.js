import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import Login from '../components/Login';
import Nav from '../components/Nav';
import Dashboard from '../components/Dashboard';
import QuestionPage from '../components/QuestionPage';
import NewQuestion from '../components/NewQuestion';
import Leaderboard from '../components/Leaderboard';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar showFastActions />
          <div className="app">
            <Nav/>
            {this.props.loading === true
                ? <Login/>
                : <div>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/questions/:id' component={QuestionPage} />
                    <Route path='/leaderboard' component={Leaderboard} />
                  </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);