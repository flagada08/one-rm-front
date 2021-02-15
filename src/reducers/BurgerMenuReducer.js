import { OPEN_BURGER_MENU } from 'src/actions/burgerMenu';

const initialState = {
  BurgerMenuIsOpen: false,
};

function LoginFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_BURGER_MENU:
      return {
        ...state,
        BurgerMenuIsOpen: !state.BurgerMenuIsOpen,
      };

    default:
      return state;
  }
}

export default LoginFormReducer;
