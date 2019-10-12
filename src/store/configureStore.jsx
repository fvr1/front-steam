import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const configureStore = (initialState) => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

const initialState = {
  user: {
    logged: false,
  },
  loading: false,
  message: {},
};

const store = configureStore(initialState);

const persistor = persistStore(store);

export { store, persistor };
