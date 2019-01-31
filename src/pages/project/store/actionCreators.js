import * as constants from './constants';

export const getProjectBudgetData = () => ({
  type: constants.GET_PROJECT_BUDGET_DATA,
  data: '',
});
export const getProjectBudgetDataSuccess = res => ({
  type: constants.GET_PROJECT_BUDGET_DATA_SUCCESS,
  data: res.data.data,
});
