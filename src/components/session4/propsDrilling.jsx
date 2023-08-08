import React from "react";

const Child = (props) => {
  return (
    <div>
      I am Child, Message from Great Grand Parent is <strong>{props.message}</strong>
    </div>
  );
};

const Parent = (props) => {
  return (
    <div>
      I am Parent
      <Child message={props.message} />
    </div>
  );
};

const GrandParent = () => {
  return (
    <div>
      I am GrandParent
      <Parent message="Hello Child" />
    </div>
  );
};

const PropsDrilling = () => {
  return (
    <div>
      PropsDrilling
      <GrandParent />
    </div>
  );
};

export default PropsDrilling;
