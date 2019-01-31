import { combineReducers } from 'redux';
import projectBudget from '../pages/project/store/reducer';
import ExpenditureBudgetConfiguration from '../pages/configuration/configuration_expenditure/store/reducer';

export default combineReducers({
  projectBudget,
  ExpenditureBudgetConfiguration,
});
