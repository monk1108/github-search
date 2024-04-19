import React, { Component } from "react";
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";
import { connect } from "react-redux";

// 定义UI组件
class Count extends Component {
    increment = () => {
      const { value } = this.selectNumber;
      this.props.increment(value * 1);
    };
    decrement = () => {
      const { value } = this.selectNumber;
      this.props.decrement(value * 1);
    };
    incrementIfOdd = () => {
      const { value } = this.selectNumber;
      if (this.props.count % 2 !== 0) {
        this.props.increment(value * 1);
      }
    };
    incrementAsync = () => {
      const { value } = this.selectNumber;
      this.props.incrementAsync(value * 1, 500);
    };
  
    render() {
      return (
        <div>
          <h1>Count: {this.props.count}, Person Number: {this.props.personNum}</h1>
          {/* bind the number to selectNumber */}
          <select ref={c => (this.selectNumber = c)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          &nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>奇数+</button>&nbsp;
          <button onClick={this.incrementAsync}>异步+</button>
        </div>
      );
    }
  }
  

export default connect(
    // 将 Redux store 中的整个状态对象映射为 count 属性
  (state) => ({ count: state.count, personNum: state.person.length}),
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count);
