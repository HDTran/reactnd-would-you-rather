import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER } from '../actions/questions';

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION_ANSWER:
    console.log('state[action.qid][action.answer].votes.concat([action.authedUser])', state[action.qid][action.answer].votes.concat([action.authedUser]));
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
          }
        }
      };
    default:
      return state;
  }
}