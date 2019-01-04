import {createStore,compose, applyMiddleware} from 'redux';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store=createStore(reducer,enhancer);

sagaMiddleware.run(mySaga)


export default store;
