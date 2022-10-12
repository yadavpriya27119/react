import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { ProductReducer } from './../reducer/ProductReducer'
import createSagaMiddleware from 'redux-saga';
import ProductSaga from './../saga/productsaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    ProductReducer,

})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(ProductSaga);

export default store;
