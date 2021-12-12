import { combineReducers } from 'redux';

import chatReducer from './chatReducer';
import userReducer from './userReducer';
import dataReducer from './dataReducer';
import lastMsgReducer from './lastMsgReducer';

export default combineReducers({
  chatReducer,
  userReducer,
  dataReducer,
  lastMsgReducer,
});
