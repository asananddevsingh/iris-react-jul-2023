import React, { createContext, useContext } from "react";

// Create The Context;

const CounterContext = createContext();

const Child = () => {
  // Consumer of context.
  const count = useContext(CounterContext);
  console.log("count :>> ", count);

  return (
    <div style={{ border: "4px solid red", padding: "8px" }}>
      I am Child, Message from Great Grand Parent is
      <h1>Count = {count}</h1>
    </div>
  );
};

const Parent = () => {
  const countAtParent = useContext(CounterContext);

  console.log("countAtParent :>> ", countAtParent);

  return (
    <div style={{ border: "4px dashed green", padding: "8px" }}>
      I am Parent
      <h4>Count = {countAtParent}</h4>
      <Child />
    </div>
  );
};

const GrandParent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ border: "4px dotted blue", padding: "8px" }}>
      I am GrandParent
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Providing the value to the context. */}
      <CounterContext.Provider value={count}>
        <Parent />
      </CounterContext.Provider>
    </div>
  );
};

const Context = () => {
  return (
    <div>
      Context
      <GrandParent />
    </div>
  );
};

export default Context;
