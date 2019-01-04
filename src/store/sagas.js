import {  all,fork } from "redux-saga/effects";
//import *as loginSagas from '../login/store/saga'

export default function* mySaga(){
  yield all([
   // ...Object.values(headerSagas),


  ].map(fork))
}
