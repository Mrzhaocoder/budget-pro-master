import * as constants from './constants';

// ConfigurationExpenditure
export const getExpenditureConfigurationData = () => ({
  type: constants.GET_EXPENDITURE_CONFIGURATION_DATA,
  data: '',
});
export const getExpenditureConfigurationDataSuccess = res => ({
  type: constants.GET_EXPENDITURE_CONFIGURATION_DATA_SUCCESS,
  data: res.data.data,
});
// ConfigurationExpenditureNew
export const getConfigurationExpenditureNew = () => ({
  type: constants.GET_EXPENDITURE_CONFIGURATION_NEW,
  data: '',
});
export const getExpenditureConfigurationNewSuccess = res => ({
  type: constants.GET_EXPENDITURE_CONFIGURATION_NEW_SUCCESS,
  data: res.data.data,
});
