import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionPage extends Component {
  render() {
    return (
      <div className="question-page">
        Question Page
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

export default connect(mapStateToProps)(QuestionPage);