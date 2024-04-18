// src/store.js
import { createStore, applyMiddleware } from 'redux';
import countReducer from './count_reducer';
import {thunk} from 'redux-thunk';

// 创建 Redux store
export default createStore(countReducer, applyMiddleware(thunk));
