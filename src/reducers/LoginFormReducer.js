import {
  FORM_INPUT_LOGIN_EMAIL,
  FORM_INPUT_LOGIN_PASSWORD,
  SUBMIT_LOGIN,
  LOGGED_IN,
} from 'src/actions/formInputLogin';

const initialState = {
  email: '',
  password: '',
  loggedIn: false,
};

function LoginFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FORM_INPUT_LOGIN_EMAIL:
      return {
        ...state,
        email: action.newValue,
      };

    case FORM_INPUT_LOGIN_PASSWORD:
      return {
        ...state,
        password: action.newValue,
      };

    case SUBMIT_LOGIN:
      return {
        ...state,
        email: '',
        password: '',
      };
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
      };

    default:
      return state;
  }
}

export default LoginFormReducer;
