import React, { Component, PureComponent } from "react";

export default class FirstComponent extends Component {
  //// Pure component will implement the "shouldComponentUpdate" lifecycle method
  // // by its own to optimize your component.
  // export default class FirstComponent extends PureComponent {
  constructor() {
    super();
    // console.log("Const is called");
  }

  state = {
    count: 0,
    initial: "",
  };

  // it is used to set the local state value based on props value changed by parent.
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log("GDSFP is called");
    // console.log("nextProps :>> ", nextProps);
    // console.log("prevState :>> ", prevState);

    if (nextProps.gender === "male") {
      return { initial: "Mr." };
    } else if (nextProps.gender === "female") {
      return { initial: "Mrs." };
    } else {
      return prevState;
    }

    // this.state.count = this.state.count + 1;
    // this.setState(this.state.count + 1)
  }

  // Runs only once in life cycle.
  componentDidMount() {
    // console.log("CDM is called");
    // This is the place from where you can call the APIs.
  }

  // // It is used to optimize the component.
  // // React uses the shallow comparison of both props & state to detect the change and optimize the component.
  // // Object.is() of JS is used to check the difference.

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("SCU is called");
  //   console.log("nextProps :>> ", nextProps);
  //   // console.log("nextState :>> ", nextState);

  //   ///// Detect the change on props.
  //   // if (this.props.name !== nextProps.name) {
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }

  //   /// Detect the change on state.
  //   // if (this.state.count !== nextState.count) {
  //   // if (nextState.count < 4) {
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }

  //   //// detect both props & state .
  //   // if (this.props.name !== nextProps.name && this.state.count !== nextState.count) {
  //   //   return true;
  //   // }
  // }

  componentDidUpdate(prevProps, prevState) {
    // console.log("CDU is called");
  }

  componentWillUnmount() {
    // console.log("Unmount is called");
  }

  handleCounter = () => {
    // if (this.state.count < 5) {
    //   this.setState({ count: this.state.count + 1 });
    // }

    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // console.log("Render is called");
    console.log("this.state :>> ", this.state);
    console.log("this.props :>> ", this.props);
    return (
      <div>
        Hello, {this.props.name}
        <button onClick={this.handleCounter}>counter {this.state.count}</button>
      </div>
    );
  }
}
