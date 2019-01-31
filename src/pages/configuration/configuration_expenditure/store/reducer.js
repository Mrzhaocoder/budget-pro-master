import * as constants from './constants';

const defaultState = {
  data: '',
  NewData: '',
};

export default (state = defaultState, action) => {
  if (action.type === constants.GET_EXPENDITURE_CONFIGURATION_DATA_SUCCESS) {
    return { ...state, data: action.data };
  }
  if (action.type === constants.GET_EXPENDITURE_CONFIGURATION_NEW_SUCCESS) {
    console.log('999');

    return { ...state, NewData: action.data };
  }

  return state;
};
