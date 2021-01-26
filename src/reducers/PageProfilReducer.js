import { FETCH_USER_DATA } from 'src/actions/pageProfil';
import { LOGGED_OUT } from 'src/actions/formInputLogin';

const initialState = {
  data: [],
};

function PageProfilReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER_DATA:
      console.log(action.data);
      return {
        ...state,
        data: action.data,
      };
    case LOGGED_OUT:
      console.log('je passe pour vider les datas');
      return {
        ...state,
        data: [],
      };

    default:
      return state;
  }
}

export default PageProfilReducer;
