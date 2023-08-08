import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(4);

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p data-testid="label">My Counter</p>
      {/* <img src="" alt="Image" />
      <input type="text" name="" id="" placeholder="search" /> */}
      <p data-testid="count">{count}</p>
      <button data-testid="btn" onClick={handleCounter}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
