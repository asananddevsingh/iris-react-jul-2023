import React from "react";
import "./styleComp.css";

const StyleComp = () => {
  return (
    <div>
      <p className="main">Hello, I am styled with class name</p>
      <p style={{ color: "orange", backgroundColor: "#d5d5d5", border: "2px solid green" }}>
        I am styled with style attribute
      </p>
    </div>
  );
};

export default StyleComp;
