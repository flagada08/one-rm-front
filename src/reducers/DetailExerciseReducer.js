import {
  FETCH_USER_DETAIL_EXERCISE,
  ADD_NEW_PERF, ADD_NEW_PERF_WEIGHT,
  FETCH_USER_ALL_GOALS,
} from 'src/actions/detailExercise';

const initialState = {
  detailExercise: '',
  AllGoals: {},
  newPerf: '',
  newPerfWeight: '',
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
    default:
      return state;
  }
}

export default DetailExerciseReducer;
