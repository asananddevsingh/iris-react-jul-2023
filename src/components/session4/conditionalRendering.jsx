import React from "react";

const ConditionalRendering = () => {
  const showH1 = false;
  const showH2 = true;
  const showH3 = true;

  const renderH1 = () => {
    if (showH1) {
      return <h1>I am H1</h1>;
    } else {
      return null;
    }
  };

  const renderH2 = () => {
    return showH2 ? <h1>I am H2</h1> : null;
  };

  const colorName = "yellow";

  return (
    <div style={{ color: colorName == "red" ? "red" : "green" }}>
      ConditionalRendering
      {renderH1()}
      {renderH2()}
      {showH3 && <h1>I am H3</h1>}
    </div>
  );
};

export default ConditionalRendering;
