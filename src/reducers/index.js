import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// on importe tous les reducers
import LoginFormReducer from './LoginFormReducer';
import RegisterFormReducer from './RegisterFormReducer';
import HeaderReducer from './HeaderReducer';
import BurgerMenuReducer from './BurgerMenuReducer';
import PageProfilReducer from './PageProfilReducer';
import DetailExerciseReducer from './DetailExerciseReducer';
import ProfilFormReducer from './ProfilFormReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'loginForm',
    'registerForm',
    'header',
    'burgerMenu',
    'profilPage',
    'detailExercise',
    'profilForm',
  ],
};

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  loginForm: LoginFormReducer,
  registerForm: RegisterFormReducer,
  header: HeaderReducer,
  burgerMenu: BurgerMenuReducer,
  profilPage: PageProfilReducer,
  detailExercise: DetailExerciseReducer,
  profilForm: ProfilFormReducer,
});

export default persistReducer(persistConfig, rootReducer);
