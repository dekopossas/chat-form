// API
import api from '../../services/api';

const allReports = api.get('/suport');

const INITIAL_STATE = {
  selectedName: {},
  allReports: [...allReports],
};

const chatReducers = (state = INITIAL_STATE, action) => {
  if (action.type === 'SELECT_REPORT') {
    return {
      ...state,
      selectedName: action.name,
    };
  }
};

export default chatReducers;
