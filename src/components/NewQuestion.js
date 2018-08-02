import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
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
              <form>
                <div className="form-group">
                  <label for="optionOneInput">Option 1</label>
                  <input type="text" className="form-control" id="optionOneInput" placeholder="Option 1"/>
                </div>
                <div className="form-group">
                  <label for="optionTwoInput">Option 2</label>
                  <input type="text" className="form-control" id="optionTwoInput" placeholder="Option 2"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
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
  }
}

export default connect(mapStateToProps)(NewQuestion);