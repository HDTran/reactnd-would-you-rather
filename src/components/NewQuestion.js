import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { withRouter } from 'react-router-dom';

class NewQuestion extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(handleAddQuestion(this.optionOneInput.value,this.optionTwoInput.value))
      .then(() => {
        this.props.history.push('/');
      });
  }
  render() {
    return (
      <div className="new-question">
        <div className="container">
          <header className="app-header">
            <h1 className="app-title">Create New Question</h1>
          </header>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Would you rather&hellip;</h5>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="optionOneInput">Option 1</label>
                  <input type="text" className="form-control" id="optionOneInput" placeholder="Option 1" ref={(input) => this.optionOneInput = input}/>
                </div>
                <div className="form-group">
                  <label htmlFor="optionTwoInput">Option 2</label>
                  <input type="text" className="form-control" id="optionTwoInput" placeholder="Option 2" ref={(input) => this.optionTwoInput = input}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  };
}

export default withRouter(connect(mapStateToProps)(NewQuestion));