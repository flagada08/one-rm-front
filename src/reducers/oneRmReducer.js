import { FORM_CONNECTION } from 'src/actions/formConnection';

const initialState = {
  isOpen: false,
};

function oneRmReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FORM_CONNECTION:
      return {
        ...state,
        isOpen: true,
      };
    default:
      return state;
  }
}

export default oneRmReducer;
