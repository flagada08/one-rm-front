import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import loginMiddleware from 'src/middlewares/loginMiddleware';
import registerMiddleware from 'src/middlewares/registerMiddleware';
import profilPageMiddelware from 'src/middlewares/profilPageMiddleware';
import reducers from 'src/reducers';
import detailExerciseMiddelware from '../middlewares/detailExerciseMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    registerMiddleware,
    profilPageMiddelware,
    detailExerciseMiddelware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  reducers,
  enhancers,
);

export const persistor = persistStore(store);

export default store;
