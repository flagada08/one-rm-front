import { FORM_CONNECTION } from 'src/actions/formConnection';
import { FORM_REGISTER, CLOSE_FORM_REGISTER } from 'src/actions/formRegister';

const initialState = {
  isOpen: false,
  OpenREgister: false,
};

function oneRmReducer(state = initialState, action = {}) {
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

    default:
      return state;
  }
}

export default oneRmReducer;
