import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
  state = {
    displayUnanswered: true
  }

  toggleUnanswered(toggle) {
    this.setState({ displayUnanswered: toggle });
  }

  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <header className="app-header">
            <h1 className="app-title">Dashboard</h1>
          </header>
          <div className="btn-group" role="group">
            <button type="button" className={"btn btn-secondary" + (this.state.displayUnanswered ? " active": "")} onClick={(e) => { this.toggleUnanswered(true); }}>Unanswered</button>
            <button type="button" className={"btn btn-secondary" + (!this.state.displayUnanswered ? " active": "")} onClick={(e) => { this.toggleUnanswered(false); }}>Answered</button>
          </div>
          <div>
            {this.props.questions
              .filter((question) => {
                if(this.state.displayUnanswered) {
                  return !question.optionOne.votes.includes(this.props.authedUser) && !question.optionTwo.votes.includes(this.props.authedUser);
                }
                return question.optionOne.votes.includes(this.props.authedUser) || question.optionTwo.votes.includes(this.props.authedUser);
              })
              .map((question) => (
                <div key={question.id}>
                  <div className="card">
                    <div className="card-body">
                      <img src={question.authorAvatarURL} className="rounded float-left" alt={question.author.name} width="100"/>
                      <h5 className="card-title">{question.author.name}</h5>
                      <p className="card-text">{question.authorName} asks, would you rather <strong>{question.optionOne.text}</strong> or <strong>{question.optionTwo.text}</strong>?</p>
                      <NavLink to={'/questions/' + question.id} className="btn btn-outline-secondary float-right">View Poll</NavLink>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  return Object.assign({}, props, {
    authedUser,
    questions: Object.values(questions)
      .sort((a,b) => ( a.timestamp - b.timestamp ))
      .map((question) => ( Object.assign({}, question, {
        authorName: users[question.author].name,
        authorAvatarURL: users[question.author].avatarURL
      }))),
    users
  });
}

export default connect(mapStateToProps)(Dashboard);