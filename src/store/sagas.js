import { all, fork } from 'redux-saga/effects';
import * as getProjectBudgetSagas from '../pages/project/store/saga';
import * as ExpenditureBudgetConfigurationSagas from '../pages/configuration/configuration_expenditure/store/saga';

export default function* mySaga() {
  yield all([...Object.values(getProjectBudgetSagas)].map(fork));
  yield all([...Object.values(ExpenditureBudgetConfigurationSagas)].map(fork));
}
