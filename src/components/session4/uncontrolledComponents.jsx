import React from "react";

const UncontrolledComponents = (props) => {
  return (
    <div>
      UncontrolledComponents
      <p>Hello, {props.name}</p>
      <input type="text" />
    </div>
  );
};

export default UncontrolledComponents;
