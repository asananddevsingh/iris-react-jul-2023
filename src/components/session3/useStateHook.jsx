import React from "react";

const UseStateComp = () => {
  const [count, setCount] = React.useState(0);
  const [msg, setMessage] = React.useState("Hi");

  const handleCount = () => {
    //// First way.
    // setCount(count + 1);

    //// Second way.
    setCount((prevCount) => {
      console.log("prevCount :>> ", prevCount);
      return prevCount + 1;
    });
  };

  const handleMsg = () => {
    setMessage("Hello");
  };

  // Multiple states
  const handleMsgAndCount = () => {
    // State updates are async and React updates it in batches.
    setMessage("Hey");
    setCount(40);
  };

  console.log("rendering...", new Date());

  return (
    <div>
      {msg}, Example of useState hook.
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increment</button>
      <button onClick={handleMsg}>Set msg to Hello</button>
      <button onClick={handleMsgAndCount}>Sent msg to Hey & count = 40</button>
    </div>
  );
};

export default UseStateComp;
