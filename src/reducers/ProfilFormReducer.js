import {
  FORM_INPUT_PROFIL_LASTNAME,
  FORM_INPUT_PROFIL_FIRSTNAME,
  FORM_INPUT_PROFIL_EMAIL,
  FORM_INPUT_PROFIL_AGE,
  FORM_INPUT_PROFIL_FITNESSROMM,
  FORM_INPUT_PROFIL_USER_DATA,
} from 'src/actions/formInputProfil';

const initialState = {
  lastname: '',
  firstname: '',
  email: '',
  age: '',
  fitnessroom: '',
};

function ProfilFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FORM_INPUT_PROFIL_LASTNAME:
      return {
        ...state,
        lastname: action.newValue,
      };

    case FORM_INPUT_PROFIL_FIRSTNAME:
      return {
        ...state,
        firstname: action.newValue,
      };

    case FORM_INPUT_PROFIL_EMAIL:
      return {
        ...state,
        email: action.newValue,
      };
    case FORM_INPUT_PROFIL_AGE:
      return {
        ...state,
        age: action.newValue,
      };
    case FORM_INPUT_PROFIL_FITNESSROMM:
      return {
        ...state,
        fitnessroom: action.newValue,
      };
    case FORM_INPUT_PROFIL_USER_DATA:
      return {
        ...state,
        lastname: action.lastname,
        firstname: action.firstname,
        email: action.email,
        age: action.age,
        fitnessroom: action.name,
      };

    default:
      return state;
  }
}

export default ProfilFormReducer;
