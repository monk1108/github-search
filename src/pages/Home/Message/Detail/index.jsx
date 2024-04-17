import React, { Component } from "react";
// import qs from "qs";

const DetailData = [
    { id: "001", content: "Message001 Content" },
    { id: "002", content: "Message002 Content" },
    { id: "003", content: "Message003 Content" },
]
export default class Detail extends Component {
  render() {
    // 接收参数方式1: params参数
    // const { id, title } = this.props.match.params;
    // 接收参数方式2: search参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1));
    // 接收参数方式3: state参数
    const { id, title } = this.props.location.state || {};

    const findResult = DetailData.find((detailObj) => {
        return detailObj.id === id;
        }
    ) || {content: "Message Not Found"};
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {findResult.content}</li>
      </ul>
    );
  }
}
