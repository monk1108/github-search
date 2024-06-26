import React, { Component } from "react";
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../components/MyNavLink";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>I'm Home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* register route */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            {/* 点home时，无法匹配上面两个，redirect到/home/news */}
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
