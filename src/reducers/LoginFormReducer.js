import {
  FORM_INPUT_LOGIN_EMAIL,
  FORM_INPUT_LOGIN_PASSWORD,
  SUBMIT_LOGIN,
  LOGGED_IN,
  LOGGED_OUT,
  REDIRECT,
  LENGTH_PASSWORD_MESSAGE,
} from 'src/actions/formInputLogin';

const initialState = {
  email: '',
  password: '',
  LengthPasswordMessage: '',
  loggedIn: false, // ! remettre a false
  loggedOut: false,
  redirect: false,
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
        LengthPasswordMessage: '',
      };

    case SUBMIT_LOGIN:
      return {
        ...state,
        email: '',
        password: '',
      };
    case REDIRECT:
      return {
        ...state,
        redirect: !state.redirect,
      };
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
        TOKEN: true,
        loggedOut: false,
      };
    case LOGGED_OUT:
      return {
        ...state,
        loggedIn: false,
        TOKEN: false,
        loggedOut: true,
      };
    case LENGTH_PASSWORD_MESSAGE:
      return {
        ...state,
        LengthPasswordMessage: 'Le mot de passe doit être composé de 6 caractères minimum',
      };

    default:
      return state;
  }
}

export default LoginFormReducer;
