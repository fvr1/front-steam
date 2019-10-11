import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (initialState) => createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk)
);

const initialState = {
  user: {},
  loading: false,
  message: {},
};

const store = configureStore(initialState);

const persistor = persistStore(store);

export { store, persistor };
