import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loginMiddleware from 'src/middlewares/loginMiddleware';
import registerMiddleware from 'src/middlewares/registerMiddleware';
import profilPageMiddelware from 'src/middlewares/profilPageMiddleware';
import reducers from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    registerMiddleware,
    profilPageMiddelware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  reducers,
  enhancers,
);

export default store;
