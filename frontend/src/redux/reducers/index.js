import { combineReducers } from 'redux';

import chatReducer from './chatReducer';
import userReducer from './userReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  chatReducer,
  userReducer,
  dataReducer,
});
