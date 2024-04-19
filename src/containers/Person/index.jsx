import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    // console.log(personObj);
    // 调用 Redux 中的 addPerson2 方法，将新的人员对象添加到 store 中
    this.props.addPerson(personObj);

    this.nameNode.value = "";
    this.ageNode.value = "";
  };

  render() {
    return (
      <div>
        <h1>The sum above: {this.props.count}</h1>
        <input
        // 获取对 <input> 元素的引用，并将其赋值给组件类实例中的 this.name 属性，以便在组件中操作该元素。
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="Please input your name..."
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="Please input your age..."
        />
        <button onClick={this.addPerson}>Submit</button>
        <ul>
            {this.props.persons.map((personObj) => {
                return (
                <li key={personObj.id}>
                    Name: {personObj.name} --- Age: {personObj.age}
                </li>
                );
            })}
        </ul>
      </div>
    );
  }
}

export default connect(
    // 将 Redux store 中的整个状态对象映射为 persons 属性
    (state) => ({ persons: state.person, count: state.count}),
    // 将 createAddPersonAction 函数映射为 addPerson2 属性，并将其添加到组件的 props 上
    {addPerson}
)(Person)
