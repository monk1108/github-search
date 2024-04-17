import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  // 初始化状态
  state = {
    users: [],
    isFirst: true, // whether it is the first time to open the page
    isLoading: false, // whether it is loading
    err: "", // error message
  };

  updateAppState = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
