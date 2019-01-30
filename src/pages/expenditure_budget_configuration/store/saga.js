import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from './constants';
import * as actionCreators from './actionCreators';

function* getExpenditureConfigurationData(action) {
  try {
    const res = yield axios.get('/api/ExpenditureConfigurationData.json', {
      // const res = yield axios.get('http://10.2.14.190/dept/getDeptTree?deptId=01', {

      data: {
        token: window.localStorage.getItem('token'),
      },
    });
    yield put(actionCreators.getExpenditureConfigurationDataSuccess(res));
  } catch (error) {
    console.log(error);
  }
}

export default function* ExpenditureBudgetConfigurationSagas() {
  yield takeEvery(constants.GET_EXPENDITURE_CONFIGURATION_DATA, getExpenditureConfigurationData);
}
