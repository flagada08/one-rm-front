import {
  FORM_INPUT_REGISTER_EMAIL,
  FORM_INPUT_REGISTER_PASSWORD,
  FORM_INPUT_REGISTER_LASTNAME,
  FORM_INPUT_REGISTER_FIRSTNAME,
  SUBMIT_REGISTER,
} from 'src/actions/formRegister';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',

};

function RegisterFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FORM_INPUT_REGISTER_FIRSTNAME:
      return {
        ...state,
        firstname: action.newValue,
      };

    case FORM_INPUT_REGISTER_LASTNAME:
      return {
        ...state,
        lastname: action.newValue,
      };

    case FORM_INPUT_REGISTER_EMAIL:
      return {
        ...state,
        email: action.newValue,
      };

    case FORM_INPUT_REGISTER_PASSWORD:
      return {
        ...state,
        password: action.newValue,
      };

    case SUBMIT_REGISTER:
      return {
        ...state,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      };

    default:
      return state;
  }
}

export default RegisterFormReducer;
