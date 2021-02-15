import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import reducers from 'src/reducers';
import loginMiddleware from 'src/middlewares/loginMiddleware';
import registerMiddleware from 'src/middlewares/registerMiddleware';
import profilPageMiddelware from 'src/middlewares/profilPageMiddleware';
import detailExerciseMiddelware from '../middlewares/detailExerciseMiddleware';
import recapExerciseMiddleware from '../middlewares/recapExerciseMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    registerMiddleware,
    profilPageMiddelware,
    detailExerciseMiddelware,
    recapExerciseMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  reducers,
  enhancers,
);

export const persistor = persistStore(store);

export default store;
