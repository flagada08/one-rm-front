import { FETCH_USER_DETAIL_EXERCISE, ADD_NEW_PERF, ADD_NEW_PERF_WEIGHT } from 'src/actions/detailExercise';

const initialState = {
  detailExercise: '',
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
    default:
      return state;
  }
}

export default DetailExerciseReducer;
