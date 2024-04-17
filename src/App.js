import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";    // About is router component
import Home from "./pages/Home";     // Home is router component
import Header from "./components/Header"; // Header is common component
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生的写法 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* react中靠路由链接实现切换组件 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                    {/* exact: 开启严格匹配 */}
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    {/* Redirect: 当所有路由都无法匹配时，跳转到localhost:3000/about */}
                    <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
