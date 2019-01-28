import * as constants from './constants';

const defaultState = {
  data: '',
};

export default (state = defaultState, action) => {
  if (action.type === constants.GET_PROJECT_BUDGET_DATA_SUCCESS) {
    return { ...state, data: action.data };
  }

  return state;
};
