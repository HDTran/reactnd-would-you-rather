// import { saveLikeToggle, saveTweet } from '../utils/api';
import { saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
// export const ADD_QUESTION = 'ADD_QUESTION';

// function addTweet(tweet) {
//   return {
//     type: ADD_QUESTION,
//     tweet
//   }
// }

// export function handleAddTweet (text, replyingTo) {
//   return (dispatch, getState) => {
//     const { authedUser } = getState();

//     dispatch(showLoading());
//     return saveTweet({
//       text,
//       author: authedUser,
//       replyingTo
//     })
//       .then((tweet) => dispatch(addTweet(tweet)))
//       .then(() => dispatch(hideLoading()));
//   }
// }

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function addQuestionAnswer ({ qid, authedUser, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    qid,
    authedUser,
    answer
  };
}

export function handleAddQuestionAnswer (info) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(addQuestionAnswer(info))
      })
      .then(() => dispatch(hideLoading()));
  }
}