import { FETCH_USER_DETAIL_EXERCISE } from 'src/actions/detailExercise';

const initialState = {
  detailExercise: '',
};

function DetailExerciseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER_DETAIL_EXERCISE:
      return {
        ...state,
        detailExercise: action.detailExercise,
      };
    default:
      return state;
  }
}

export default DetailExerciseReducer;
