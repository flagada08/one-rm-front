import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import oneRmReducer from 'src/reducers/oneRmReducer';

const enhancers = composeWithDevTools();

const store = createStore(
  oneRmReducer,
  enhancers,
);

export default store;
