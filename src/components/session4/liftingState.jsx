import React, { useState } from "react";

const Accordion = (props) => {
  // const [isActive, setIsActive] = useState(false);

  // const handleToggle = () => {
  //   setIsActive(!isActive);
  // };

  const handleOnClick = (event) => {
    console.log("event :>> ", event);
    return 1;
  };

  var a = handleOnClick;

  return (
    <div style={{ border: "1px solid black" }}>
      <p
        // onClick={handleToggle}
        // onClick={props.onToggle}
        onClick={() => {
          if (typeof props.onToggle === "function") {
            props.onToggle(props.tabNumber, "anyOtherData");
          } else {
            console.error("Callback in onToggle props is not a function.");
          }
        }}
        style={{ backgroundColor: "#d5d5d5", margin: "0", padding: "4px", cursor: "pointer" }}
      >
        Tab {props.tabNumber}
      </p>
      {props.isActive ? (
        <p style={{ borderTop: "1px solid black", margin: "0", padding: "4px" }}>
          Panel of Tab {props.tabNumber}
        </p>
      ) : null}
    </div>
  );
};

const LiftingState = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (clickedIndex, anyOtherData) => {
    setActiveIndex(clickedIndex);
  };

  return (
    <div>
      {/* <button onClick={handleToggle}>Toggle</button> */}

      {/* <Accordion tabNumber={1} isActive={activeIndex === 1} onToggle={() => handleToggle(1)} /> */}
      {/* <Accordion tabNumber={2} isActive={activeIndex === 2} onToggle={() => handleToggle(2)} /> */}
      {/* <Accordion tabNumber={3} isActive={activeIndex === 3} onToggle={() => handleToggle(3)} /> */}

      <Accordion tabNumber={1} isActive={activeIndex === 1} onToggle={handleToggle} />
      <Accordion tabNumber={2} isActive={activeIndex === 2} onToggle={handleToggle} />
      <Accordion tabNumber={3} isActive={activeIndex === 3} onToggle={handleToggle} />
    </div>
  );
};

export default LiftingState;
