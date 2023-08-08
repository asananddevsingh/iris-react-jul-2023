import React from "react";

// Or React.Component
class ClassComp extends React.PureComponent {
  state = {
    count: 10,
  };

  // this.setState()

  render() {
    return (
      <>
        <h1>{this.props.msg} from Class Component </h1>
        <div>Count = {this.state.count}</div>
      </>
    );
  }
}

export const FuncComp = (props) => {
  // [state, callFnToUpdateTheState]
  const [count, setCount] = React.useState(20);

  return (
    <>
      <h1>{props.msg} from Class Component</h1>
      <div>Count = {count}</div>
    </>
  );
};

export default ClassComp;
