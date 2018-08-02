import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    return (
      <div className="leaderboard">
        <div className="container">
          <header className="app-header">
            <h1 className="app-title">Leader Board</h1>
          </header>
          {this.props.users.map((user) => (
            <div key={user.id}>
              <div className="card">
                <div className="card-body">
                  <img src={user.avatarURL} className="rounded float-left" alt={user.name} width="100"/>
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text"><strong>{user.score} points.</strong> {user.questionCount} questions asked. {user.answerCount} questions answered.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const leaderboardUsers = Object.values(users).map((user) => {
    return Object.assign({}, user, { answerCount: Object.keys(user.answers).length, questionCount: user.questions.length, score: Object.keys(user.answers).length + user.questions.length });
  });
  return {
    users: leaderboardUsers.sort((a, b) => { return b.score - a.score; })
  }
}

export default connect(mapStateToProps)(Leaderboard);