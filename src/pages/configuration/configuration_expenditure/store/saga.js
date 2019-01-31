import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from './constants';
import * as actionCreators from './actionCreators';

function* getExpenditureConfigurationData(action) {
  try {
    const res = yield axios.get('/api/test1.json', {
      // const res = yield axios.get('http://10.2.14.179:8080/dict/findAll', {
      data: {
        token: window.localStorage.getItem('token'),
      },
    });
    console.log(res);

    yield put(actionCreators.getExpenditureConfigurationDataSuccess(res));
  } catch (error) {
    console.log(error);
  }
}
function* getConfigurationExpenditureNew(action) {
  try {
    const res = yield axios.get('/api/test1.json', {
      // const res = yield axios.get('http://10.2.14.179:8080/dict/findAll', {
      data: {
        token: window.localStorage.getItem('token'),
      },
    });
    console.log('007', res);

    yield put(actionCreators.getExpenditureConfigurationNewSuccess(res));
  } catch (error) {
    console.log(error);
  }
}

export default function* ExpenditureBudgetConfigurationSagas() {
  yield takeEvery(constants.GET_EXPENDITURE_CONFIGURATION_DATA, getExpenditureConfigurationData);
  yield takeEvery(constants.GET_EXPENDITURE_CONFIGURATION_NEW, getConfigurationExpenditureNew);
}
