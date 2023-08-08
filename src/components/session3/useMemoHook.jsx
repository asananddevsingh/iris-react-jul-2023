import React from "react";

const sortList = (data, order) => {
  console.log("Sorting data...");
  return data.sort((a, b) => {
    if (order === "asc") {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    } else {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    }
  });
};

const UseMemoHook = (props) => {
  // console.log("props.data :>> ", props.data);

  const [count, setCount] = React.useState(0);
  const [order, setOrder] = React.useState("asc");

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleOrder = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  /// Sorting without memo.
  // const sortedList = sortList(props.data);

  // Sorting with React.useMemo.
  const sortedList = React.useMemo(() => {
    console.time("Sorting Time Taken ::");
    const sData = sortList(props.data, order);
    console.timeEnd("Sorting Time Taken ::");
    return sData;
  }, [order]);

  return (
    <div>
      <p>useMemoHook</p>
      <p>
        Count = {count}, order is {order}
      </p>
      <button onClick={handleCount}>Increment</button>
      <button onClick={handleOrder}>Order ASC/DESC</button>
      {Array.isArray(sortedList)
        ? sortedList.map((item, index) => {
            return <div key={item.id}>{item.title}</div>;
          })
        : null}
    </div>
  );
};

export default UseMemoHook;
