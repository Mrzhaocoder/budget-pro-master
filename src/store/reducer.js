import { combineReducers } from 'redux';
import projectBudget from '../pages/project_budget/store/reducer';
import ExpenditureBudgetConfiguration from '../pages/expenditure_budget_configuration/store/reducer';

export default combineReducers({
  projectBudget,
  ExpenditureBudgetConfiguration,
});
