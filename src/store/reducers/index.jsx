import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './auth';
import { messageReducer, loadingReducer } from './general';

const authPersistConfig = {
  storage,
  key: 'auth',
};

export default combineReducers({
  user: persistReducer(authPersistConfig, userReducer),
  loading: loadingReducer,
  message: messageReducer,
});
