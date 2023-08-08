import React, { useMemo } from "react";
import { MOCK_DATA } from "../../mockData";

const sortData = (order) => {
  console.log("Sorting is called.");
  console.time("filter array");
  let sd;
  if (order === "asc") {
    sd = MOCK_DATA.sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0));
  } else {
    sd = MOCK_DATA.sort((a, b) => (a.title < b.title ? 1 : a.title > b.title ? -1 : 0));
  }
  console.timeEnd("filter array");
  return sd;
};

const Hooks = () => {
  const [count, setCount] = React.useState(0);
  const [order, setOrder] = React.useState("asc");

  const handleOrder = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  // const sortedData = sortData();

  const sortedData = useMemo(() => {
    return sortData(order);
  }, [order]);

  React.useEffect(() => {
    console.log("Effect called", count);
    return () => {
      console.log("Callback called");
    };
  }, [count]);

  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={handleCount}>Increment</button>
      <button onClick={handleOrder}>Order</button>
      {sortedData.map((d) => (
        <div>{d.title}</div>
      ))}
    </div>
  );
};

export default Hooks;
