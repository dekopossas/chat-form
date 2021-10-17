// API
import api from '../../services/api';

const allReports = api.get('/suport');

const INITIAL_STATE = {
  selectedPerson: {},
  allReports: [...allReports],
};

const chatReducers = (state = INITIAL_STATE, action) => {
  if (action.type === 'SELECT_REPORT') {
    return {
      ...state,
      selectedPerson: action.person,
    };
  }
};

export default chatReducers;
