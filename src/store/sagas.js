import { all, fork } from 'redux-saga/effects';
import * as getProjectBudgetSagas from '../pages/project_budget/store/saga';
import * as ExpenditureBudgetConfigurationSagas from '../pages/expenditure_budget_configuration/store/saga';

export default function* mySaga() {
  yield all([...Object.values(getProjectBudgetSagas)].map(fork));
  yield all([...Object.values(ExpenditureBudgetConfigurationSagas)].map(fork));
}
