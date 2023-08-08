import React from "react";

const ChildrenPropComp = (props) => {
  console.log("props :>> ", props);
  return (
    <div style={{ border: "2px solid", margin: "8px" }}>
      <h1>About, {props.name}</h1>
      {props.children}
    </div>
  );
};

export default ChildrenPropComp;
