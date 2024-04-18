// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// 将 Redux store 提供给整个应用程序
store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});