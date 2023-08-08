import React from "react";

const UseEffectHook = () => {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    //// First way.
    setCount(count + 1);
  };

  const handleCount40 = () => {
    //// First way.
    setCount(40);
  };

  // componentDidMount().
  React.useEffect(() => {
    console.log("Use effect called", new Date());

    // componentWillUnmount()
    return () => {
      console.log("Use effect cleanup.");
    };
  }, []);

  // componentDidMount() && componentDidUpdate().
  React.useEffect(() => {
    console.log("Use effect called with dependencies.", new Date());
    // getData(count)
    // console.log("Count 1 ::", count);

    // connection created here.
    // cleanup functions.
    return () => {
      // connection cleaned up here.
      console.log("Use effect callback is called.");
    };
  }, [count]); // It can have multiple dependencies, [count, msg]

  console.log("Rendering the functional componnet.");

  return (
    <div>
      Hi, I am seEffect hook.
      <h1>Count = {count}</h1>
      <br />
      <button onClick={handleCount}>Increment</button>
      <button onClick={handleCount40}>Set 40</button>
    </div>
  );
};

export default UseEffectHook;
