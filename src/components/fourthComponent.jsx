// local state.
import React from "react";

// 2nd example of state.
class FourthComponent extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 1,
  //   };

  //   // Binding the context
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // No need to create state in constructor.
  state = {
    count: 1,
    msg: "Hello",
  };

  // First example.
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Second example.
  handleClick2 = () => {
    const updater = (prevState, curProps) => {
      console.log("prevState :>> ", prevState);
      console.log("curProps :>> ", curProps);
      if (curProps.action === "incremnt") {
        return { count: prevState.count + 1 };
      } else {
        return { count: prevState.count - 1 };
      }
    };

    this.setState(updater);
  };

  // Third example.
  handleClick3 = () => {
    const updater = (prevState, curProps) => {
      return { count: prevState.count + 1 };
    };

    this.setState(updater, this.callback);
  };

  callback = () => {
    // It is guarenteed that,
    console.log("State after updation ::", this.state);
  };

  render() {
    console.log("State In render::", this.state);
    return (
      <div>
        <h4>Count :: {this.state.count}</h4>
        <button onClick={this.handleClick}>Increiment</button>
        <button onClick={this.handleClick2}>
          {this.props.action} and get the updated state too
        </button>
        <button onClick={this.handleClick3}>Increment 3rd</button>
      </div>
    );
  }
}

export default FourthComponent;
