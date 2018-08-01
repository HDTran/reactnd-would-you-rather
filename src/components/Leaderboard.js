import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    return (
      <div className="leaderboard">
        Leader Board
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(Leaderboard);