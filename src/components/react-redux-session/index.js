import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store/counterSlice";
import { fetchUsers } from "../../store/userSlice";

function ReactReduxSession() {
  const [addBy, setAddBy] = React.useState(10);

  const count = useSelector((state) => state.counter.count);
  const userState = useSelector((state) => state.user);
  // console.log("count :>> ", count);
  console.log("userState :>> ", userState);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddByNumber = () => {
    dispatch(counterActions.addByNumber(addBy));
  };

  const handleUser = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input type="number" value={addBy} onChange={(e) => setAddBy(e.target.value)} />
      <button onClick={handleAddByNumber}>Add By Number</button>
      <hr />
      <button disabled={userState.loading} onClick={handleUser}>
        {userState.loading ? "Loading..." : "Fetch Users"}
      </button>
      {userState?.data?.map((u) => {
        return <div key={u.id}>{u.title}</div>;
      })}
      {userState?.error && <div style={{ color: "red" }}>{userState?.error}</div>}
    </div>
  );
}

export default ReactReduxSession;
