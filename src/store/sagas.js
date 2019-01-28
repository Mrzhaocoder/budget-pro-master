import { all, fork } from 'redux-saga/effects';
import * as projectBudget from '../pages/project_budget/store/saga';

export default function* mySaga() {
  yield all([...Object.values(projectBudget)].map(fork));
}
