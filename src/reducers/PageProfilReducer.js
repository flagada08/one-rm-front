import { FETCH_USER_DATA, FETCH_ALL_USERS_DATA, CLICK_DELETE_MEMBER, FETCH_USER_ROLE } from 'src/actions/pageProfil';
import { FETCH_USER_DATA_PERFORMANCES } from 'src/actions/recapExercise';
import { LOGGED_OUT } from 'src/actions/formInputLogin';

const initialState = {
  data: '',
  role: '',
  dataPerformances: '',
  allUsersData: '',
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
    case FETCH_ALL_USERS_DATA:
      return {
        ...state,
        allUsersData: action.data,
      };
    case LOGGED_OUT:
      return {
        ...state,
        data: '',
        dataExercises: '',
        role: '',
      };
    case CLICK_DELETE_MEMBER:
      return {
        ...state,
        allUsersData: state.allUsersData.filter((user) => user.id !== action.id),
      };
    case FETCH_USER_ROLE:
      return {
        ...state,
        role: action.userRole,
      };

    default:
      return state;
  }
}

export default PageProfilReducer;
