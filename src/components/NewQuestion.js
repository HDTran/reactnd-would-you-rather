import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  render() {
    return (
      <div className="new-question">
        New Question
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

export default connect(mapStateToProps)(NewQuestion);