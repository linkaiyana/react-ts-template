/*
 * @Description: 
 * @Author: linkaiyan
 * @Date: 2022-02-18 15:33:17
 * @LastEditTime: 2022-02-18 17:27:34
 * @LastEditors: linkaiyan
 * @Reference: 
 */
import { createStore, combineReducers, applyMiddleware, compose, Middleware, Reducer } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { IStoreState, IAction } from './types';
import appReducer from './module/appReducer';

const reducers: Reducer<IStoreState, IAction<any>> = combineReducers<IStoreState>({
  app: appReducer,
});

const middleware: Middleware[] = [reduxThunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxLogger);
}

function createMyStore() {
  /* eslint-disable no-underscore-dangle */
  const store = window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(
        reducers,
        compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__({})),
      )
    : createStore(reducers, applyMiddleware(...middleware));

  return store;
}

const store = createMyStore();

export default store;