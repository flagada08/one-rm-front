import { FETCH_USER_DATA } from 'src/actions/pageProfil';

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

    default:
      return state;
  }
}

export default PageProfilReducer;
