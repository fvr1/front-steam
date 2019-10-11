import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = (initialState) => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

const initialState = {
  user: {},
  loading: false,
  message: {},
};

const store = configureStore(initialState);

export default store;
