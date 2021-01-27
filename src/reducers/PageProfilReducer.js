import { FETCH_USER_DATA, FETCH_USER_DATA_EXERCISES } from 'src/actions/pageProfil';
import { LOGGED_OUT } from 'src/actions/formInputLogin';

const initialState = {
  data: [],
  dataExercises: [],
};

function PageProfilReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        data: action.data,
      };
    case FETCH_USER_DATA_EXERCISES:
      return {
        ...state,
        dataExercises: action.data,
      };
    case LOGGED_OUT:
      return {
        ...state,
        data: [],
      };

    default:
      return state;
  }
}

export default PageProfilReducer;
