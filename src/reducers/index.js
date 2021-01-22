import { combineReducers } from 'redux';
// on importe tous les reducers
import LoginFormReducer from './LoginFormReducer';
import RegisterFormReducer from './RegisterFormReducer';
import oneRmReducer from './oneRmReducer';
import BurgerMenuReducer from './BurgerMenuReducer';
// etc
// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  loginForm: LoginFormReducer,
  registerForm: RegisterFormReducer,
  oneRM: oneRmReducer,
  burgerMenu: BurgerMenuReducer,
  // etc
});
export default rootReducer;
