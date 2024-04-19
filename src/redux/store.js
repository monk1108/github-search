// src/store.js
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import allReducers from './reducers';



// 创建 Redux store
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
