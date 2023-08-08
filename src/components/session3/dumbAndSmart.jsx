import React from "react";

const Dumb = (props) => {
  return <div>{props.greet}, Dumb Component.</div>;
};

export const Smart = (props) => {
  const [count, setCount] = React.useState(10);

  const handleIncr = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        {props.greet}, Smart Component. Count is {count}
      </div>
      <button onClick={handleIncr}>Increment</button>
    </>
  );
};

export default Dumb;
