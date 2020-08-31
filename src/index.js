import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// new
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers';
import { mySaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer, applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
