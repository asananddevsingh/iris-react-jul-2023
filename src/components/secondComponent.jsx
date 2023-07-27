// Class Based Component
import React, { Component } from "react";

// example of props.
class SecondComponent extends React.Component {
  render() {
    console.log("this.props :>> ", this.props);

    return (
      <h1>
        Hello,
        <span style={{ color: "green" }}>{this.props.name}</span>, Your age is
        <span style={{ color: "green" }}>{this.props.age}</span>
      </h1>
    );
  }
}

export default SecondComponent;

// function Sum (n1, n2){
//   return n1 + n2
// }

// Sum(1,2)
