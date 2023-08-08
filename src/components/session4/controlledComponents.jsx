import React from "react";

const ControlledComponents = (props) => {
  const [text, setText] = React.useState("Abc");

  const handleChange = (event) => {
    console.log("Event ::", event.target.value);
    setText(event.target.value);
  };

  return (
    <div>
      ControlledComponents
      <p>Hello, {props.name}</p>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};

export default ControlledComponents;
