import { FORM_CONNECTION, CLOSE_LOGIN_FORM } from 'src/actions/formConnection';
import { FORM_REGISTER, CLOSE_FORM_REGISTER } from 'src/actions/formRegister';

const initialState = {
  isOpen: false,
  OpenREgister: false,
};

function HeaderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FORM_CONNECTION:
      return {
        ...state,
        isOpen: true,
      };

    case FORM_REGISTER:
      return {
        ...state,
        OpenREgister: true,
        isOpen: false,
      };

    case CLOSE_FORM_REGISTER:
      return {
        ...state,
        OpenREgister: false,
        isOpen: true,
      };

    case CLOSE_LOGIN_FORM:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
}

export default HeaderReducer;
