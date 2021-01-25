import {
  FORM_INPUT_LOGIN_EMAIL,
  FORM_INPUT_LOGIN_PASSWORD,
  SUBMIT_LOGIN,
  LOGGED_IN,
  LOGGED_OUT,
} from 'src/actions/formInputLogin';

const initialState = {
  email: '',
  password: '',
  loggedIn: false, //! remettre a false
  TOKEN: localStorage.getItem('token') != null,
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
        TOKEN: true,
      };
    case LOGGED_OUT:
      return {
        ...state,
        TOKEN: false,
      };

    default:
      return state;
  }
}

export default LoginFormReducer;
