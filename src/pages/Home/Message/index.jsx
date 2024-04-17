import React, { Component } from "react";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "001", title: "message001" },
      { id: "002", title: "message002" },
      { id: "003", title: "message003" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((messageObj) => {
            return (
              <li key={messageObj.id}>
                {/* 传参方式1: params参数 */}
                {/* <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp; */}
                {/* 传参方式2: search参数 */}
                {/* <Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp; */}
                {/* 传参方式3: state参数 */}
                <Link to={{pathname: "/home/message/detail", state: { id: messageObj.id, title: messageObj.title }}}>{messageObj.title}</Link>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接受参数方式1：params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
        {/* 声明接受参数方式2：search参数*/}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* 声明接受参数方式3：state参数 */}
        <Route path="/home/message/detail" component={Detail} />

      </div>
    );
  }
}
