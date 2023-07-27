import React from "react";

class Child extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Child is rendered & props are :>> ", this.props);
    return (
      <div>
        <h1>I am Child, My parent says :: {this.props.parentMsg} </h1>
        <br />
        <p>Child Count is:: {this.state.count}</p>
        <button onClick={this.handleClick}>Child Increment</button>
      </div>
    );
  }
}

class Parent extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Parent is rendered & state is :>> ", this.state);
    return (
      <div>
        <h1>My Child Is</h1>
        <Child parentMsg="Hello Child" />
        <br />
        <p>Parent Count is:: {this.state.count}</p>
        <button onClick={this.handleClick}>Parent Increment</button>
      </div>
    );
  }
}

export default Parent;
