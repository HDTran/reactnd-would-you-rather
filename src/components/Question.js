import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    return (
      <div className="question">
        Question
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

export default connect(mapStateToProps)(Question);