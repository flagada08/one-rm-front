import { FETCH_USER_DETAIL_EXERCISE, ADD_NEW_PERF } from 'src/actions/detailExercise';

const initialState = {
  detailExercise: '',
  newPerf: '',
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
    default:
      return state;
  }
}

export default DetailExerciseReducer;
