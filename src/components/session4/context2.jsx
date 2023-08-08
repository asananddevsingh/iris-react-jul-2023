import React, { createContext, useContext } from "react";

// Create The Context;
const CounterContext = createContext();

const Child = () => {
  // Consumer of context.
  const [count, setter] = useContext(CounterContext);
  console.log("count :>> ", count);

  return (
    <div style={{ border: "4px solid red", padding: "8px" }}>
      I am Child, Message from Great Grand Parent is
      <h1>Count = {count}</h1>
      <button onClick={() => setter(count + 2)}>Change Context value from Child</button>
    </div>
  );
};

const Parent = () => {
  const [countAtParent, change] = useContext(CounterContext);

  console.log("countAtParent :>> ", countAtParent);

  return (
    <div style={{ border: "4px dashed green", padding: "8px" }}>
      I am Parent
      <h4>Count = {countAtParent}</h4>
      <button onClick={() => change(countAtParent - 2)}>Change Context value from Parent</button>
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
      <CounterContext.Provider value={[count, setCount]}>
        <Parent />
      </CounterContext.Provider>
    </div>
  );
};

const Context2 = () => {
  // We can't access context here because it is outside the provider.
  const context = useContext(CounterContext);
  console.log("context :>> ", context);

  return (
    <div>
      Context2
      <GrandParent />
    </div>
  );
};

export default Context2;
