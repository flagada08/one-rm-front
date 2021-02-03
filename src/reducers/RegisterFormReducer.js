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
  FORM_INPUT_REGISTER_CONFIRM_PASSWORD,
  ALL_FITNESS_ROOM_DATA,
  CONFIRM_PASSWORD_MESSAGE,
  CONFIRM_LENGTH_PASSWORD_MESSAGE,
} from 'src/actions/formRegister';

const initialState = {
  gender: '',
  firstname: '',
  lastname: '',
  age: '',
  email: '',
  role: '',
  password: '',
  confirmPassword: '',
  fitnessRoom: '',
  boxPassword: '',
  allFitnessRoom: '',
  confirmPasswordMessage: '',
  confirmLengthPasswordMessage: '',
};

function RegisterFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_FITNESS_ROOM_DATA:
      return {
        ...state,
        allFitnessRoom: action.fitnessRoomData,
      };
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
        confirmLengthPasswordMessage: '',
      };

    case FORM_INPUT_REGISTER_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.newValue,
        confirmPasswordMessage: '',
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

    case CONFIRM_PASSWORD_MESSAGE:
      return {
        ...state,
        confirmPasswordMessage: 'Confirmation du mot de passe incorrect',
      };

    case CONFIRM_LENGTH_PASSWORD_MESSAGE:
      return {
        ...state,
        confirmLengthPasswordMessage: 'Le mot de passe doit être composé de 6 caractères minimum',
      };

    case SUBMIT_REGISTER:
      return {
        ...state,
        gender: '',
        age: '',
        role: '',
        fitnessRoom: '',
        firstname: '',
        lastname: '',
        email: '',
      };

    default:
      return state;
  }
}

export default RegisterFormReducer;
