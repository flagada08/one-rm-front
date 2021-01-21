import { FORM_INPUT_LOGIN_EMAIL, FORM_INPUT_LOGIN_PASSWORD, SUBMIT_LOGIN } from 'src/actions/formInputLogin';

const initialState = {
  email: '',
  password: '',
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

    default:
      return state;
  }
}

export default LoginFormReducer;
