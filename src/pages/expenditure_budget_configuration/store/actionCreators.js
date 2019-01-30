import * as constants from './constants';

export const getExpenditureConfigurationData = () => ({
  type: constants.GET_EXPENDITURE_CONFIGURATION_DATA,
  data: '',
});
export const getExpenditureConfigurationDataSuccess = res => ({
  type: constants.GET_EXPENDITURE_CONFIGURATION_DATA_SUCCESS,
  data: res.data.data,
});
