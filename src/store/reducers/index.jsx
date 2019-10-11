import { combineReducers } from 'redux';
import userReducer from './auth';
import { messageReducer, loadingReducer } from './general';

export default combineReducers({
  user: userReducer,
  loading: loadingReducer,
  message: messageReducer,
});
