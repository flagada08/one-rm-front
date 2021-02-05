import { FETCH_DATA_EXERCISES_PAGE } from 'src/actions/recapExercise';

const initialState = {
  exercisesPage: '',
};

function ExercisesPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_DATA_EXERCISES_PAGE:
      return {
        ...state,
        exercisesPage: action.dataExercisesPage,
      };

    default:
      return state;
  }
}

export default ExercisesPageReducer;
