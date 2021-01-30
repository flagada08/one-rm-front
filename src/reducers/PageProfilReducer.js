import { FETCH_USER_DATA, FETCH_USER_DATA_PERFORMANCES } from 'src/actions/pageProfil';
import { LOGGED_OUT } from 'src/actions/formInputLogin';

const initialState = {
  data: '',
  dataExercises: '',
  dataPerformances: '',
};

function PageProfilReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        data: action.data,
      };
    case FETCH_USER_DATA_PERFORMANCES:
      return {
        ...state,
        dataPerformances: action.dataPerformances,
      };
    case LOGGED_OUT:
      return {
        ...state,
        data: '',
        dataExercises: '',
      };

    default:
      return state;
  }
}

export default PageProfilReducer;
