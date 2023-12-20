import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer, createorderReducer } from '../reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  createorder: createorderReducer,
});

const store = configureStore({
  reducer: rootReducer,
})

export { store };