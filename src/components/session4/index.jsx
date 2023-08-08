import React from "react";
import LiftingState from "./liftingState";
import PropsDrilling from "./propsDrilling";
import Context from "./context";
import Context2 from "./context2";
import ConditionalRendering from "./conditionalRendering";
import PropTypesComp from "./propTypes";
import UncontrolledComponents from "./uncontrolledComponents";
import ControlledComponents from "./controlledComponents";

const Session4 = () => {
  const [name, setName] = React.useState("React JS");

  return (
    <div>
      Session 4{/* <LiftingState /> */}
      {/* <PropsDrilling /> */}
      {/* <Context /> */}
      {/* <Context2 /> */}
      {/* <ConditionalRendering /> */}
      {/* <PropTypesComp message="Hello" name={"React JS"} /> */}
      {/* <UncontrolledComponents name="React JS" /> */}
      <button onClick={() => setName("React JS v18.x")}>Change Name</button>
      <ControlledComponents name={name} />
    </div>
  );
};

export default Session4;
