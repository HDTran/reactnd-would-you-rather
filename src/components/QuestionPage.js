import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionPage extends Component {
  render() {
    console.log('this.props', this.props);

    const { question, authedUser } = this.props;
  
    return (
      <div className="question-page">
        <div className="container">
          <header className="app-header">
            <h1 className="app-title">Question Page</h1>
          </header>
          <div>
            {question !== null && (
              <div className="card">
                <div className="card-body">
                  <img src={question.authorAvatarURL} className="rounded float-left" alt={question.author.name} width="100"/>
                  <h5 className="card-title">{question.author.name}</h5>
                  <p className="card-text">{question.authorName} asks, would you rather <strong>{question.optionOne.text}</strong> or <strong>{question.optionTwo.text}</strong>?</p>
                  {question.answered ? (
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{question.optionOne.votes.length} of {question.optionOne.votes.length + question.optionTwo.votes.length} chose {question.optionOne.text}.</li>
                    <li className="list-group-item">{question.optionTwo.votes.length} of {question.optionOne.votes.length + question.optionTwo.votes.length} chose {question.optionTwo.text}.</li>
                    <li className="list-group-item"><div className="alert alert-success" role="alert">You've answered, {question.optionOne.votes.includes(authedUser) ? (<strong>{question.optionOne.text}</strong>) : (<strong>{question.optionTwo.text}</strong>)}.</div></li>
                  </ul>
                  )
                  : (
                    <div>You haven't answered.</div>
                  )}
                </div>
              </div>
            )}
            {question === null && (
              <div className="card text-white bg-danger mb-3">
                <div className="card-header">404 Error</div>
                <div className="card-body">
                  <h5 className="card-title">This question does not exist.</h5>
                  <p className="card-text">If you just added this question, it will not appear with the current API.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  return Object.assign({}, props, {
    authedUser,
    question: question ? Object.assign({}, question, {
      authorName: users[question.author].name,
      authorAvatarURL: users[question.author].avatarURL,
      answered: (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
    }) : null,
    users
  });
}

export default connect(mapStateToProps)(QuestionPage);