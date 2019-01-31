import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from './constants';
import * as actionCreators from './actionCreators';

function* getProjectBudgetData(action) {
  try {
    const res = yield axios.get('/api/getProjectBudgetData.json', {
      data: {
        token: window.localStorage.getItem('token'),
      },
    });
    yield put(actionCreators.getProjectBudgetDataSuccess(res));
  } catch (error) {
    console.log(error);
  }
}

export default function* getProjectBudgetSagas() {
  yield takeEvery(constants.GET_PROJECT_BUDGET_DATA, getProjectBudgetData);
}
