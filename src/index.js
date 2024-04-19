// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    // 给组件批量传递 store
    // using provider: wrap the App component with Provider
    // enabling all App sub-components to access the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);