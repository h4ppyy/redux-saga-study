import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';

export const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer, applyMiddleware(sagaMiddleware)
)