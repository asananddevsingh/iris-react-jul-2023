// local state.
import React from "react";

// example of state.
class ThirdComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };

    // Binding the context
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log("This ::", this);
    // console.log("State", this.state.count);

    //// we should not mutate the state directly.
    // this.state.count = this.state.count + 1;
    // console.log("In Event :>> ", this.state.count);

    this.setState({ count: this.state.count + 1 });
    // we will still get the old state because states get update async.
    // console.log("this.state.count :>> ", this.state.count);
  }

  // Arrow functions will not need them to be bind in constructor.
  handleClick2 = () => {
    // console.log("This ::", this);
    // console.log("State", this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render::", this.state.count);
    return (
      <div>
        <h4>Count :: {this.state.count}</h4>
        <button onClick={this.handleClick}>Incriment</button>
        <button onClick={this.handleClick2}>Incriment 2</button>
      </div>
    );
  }
}

export default ThirdComponent;
