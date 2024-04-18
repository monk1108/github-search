import React, { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class Header extends Component {
    back = () => {
        this.props.history.goBack();
    }

    forward = () => {
        this.props.history.goForward();
    }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>BACK</button>&nbsp;&nbsp;
        <button onClick={this.forward}>FORWARD</button>
      </div>
    );
  }
}

export default withRouter(Header);
