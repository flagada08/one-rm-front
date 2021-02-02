import {
  FETCH_USER_DETAIL_EXERCISE,
  ADD_NEW_PERF, ADD_NEW_PERF_WEIGHT,
  FETCH_USER_ALL_GOALS,
  SET_NEW_MESSAGE,
  FETCH_USER_MESSAGE,
} from 'src/actions/detailExercise';

const initialState = {
  detailExercise: '',
  AllGoals: {},
  newPerf: '',
  newPerfWeight: '',
  setMessage: '',
  allMessages: [],
};

function DetailExerciseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER_DETAIL_EXERCISE:
      return {
        ...state,
        detailExercise: action.detailExercise,
      };
    case ADD_NEW_PERF:
      return {
        ...state,
        newPerf: action.newPerf,
      };
    case ADD_NEW_PERF_WEIGHT:
      return {
        ...state,
        newPerfWeight: action.newPerfWeight,
      };
    case FETCH_USER_ALL_GOALS:
      return {
        ...state,
        AllGoals: action.AllGoals,
      };
    case SET_NEW_MESSAGE:
      return {
        ...state,
        setMessage: action.newMessage,
      };
    case FETCH_USER_MESSAGE: {
      const message = {
        id: 1,
        content: state.setMessage,
        user: 3,
        exercise: 0,
      };
      return {
        ...state,
        allMessages: [...action.allMessages, message],
      };
    }
    default:
      return state;
  }
}

export default DetailExerciseReducer;
