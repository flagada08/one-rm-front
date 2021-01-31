import {
  FORM_INPUT_REGISTER_EMAIL,
  FORM_INPUT_REGISTER_PASSWORD,
  FORM_INPUT_REGISTER_LASTNAME,
  FORM_INPUT_REGISTER_FIRSTNAME,
  FORM_INPUT_REGISTER_GENDER,
  FORM_INPUT_REGISTER_AGE,
  FORM_INPUT_REGISTER_ROLE,
  FORM_INPUT_REGISTER_FITNESSROOM,
  SUBMIT_REGISTER,
  FORM_INPUT_REGISTER_BOX_PASSWORD,
} from 'src/actions/formRegister';

const initialState = {
  gender: '',
  firstname: '',
  lastname: '',
  age: '',
  email: '',
  role: '',
  password: '',
  fitnessRoom: '',
  boxPassword: '',

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
    case FORM_INPUT_REGISTER_GENDER:
      return {
        ...state,
        gender: action.newValue,
      };
    case FORM_INPUT_REGISTER_ROLE:
      return {
        ...state,
        role: action.newValue,
      };
    case FORM_INPUT_REGISTER_FITNESSROOM:
      return {
        ...state,
        fitnessRoom: action.newValue,
      };
    case FORM_INPUT_REGISTER_AGE:
      return {
        ...state,
        age: action.newValue,
      };
    case FORM_INPUT_REGISTER_BOX_PASSWORD:
      return {
        ...state,
        boxPassword: action.newValue,
      };

    case SUBMIT_REGISTER:
      return {
        ...state,
        genre: '',
        age: '',
        role: '',
        fitnessRoom: '',
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
