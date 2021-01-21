import { combineReducers } from 'redux';
// on importe tous les reducers
import LoginFormReducer from './LoginFormReducer';
import RegisterFormReducer from './RegisterFormReducer';
import oneRmReducer from './oneRmReducer';
// etc
// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  loginForm: LoginFormReducer,
  registerForm: RegisterFormReducer,
  oneRM: oneRmReducer,
  // etc
});
export default rootReducer;
