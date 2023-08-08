import React, { Suspense } from "react";
import "./App.css";
import Counter from "./components/counter/counter";
// import ErrorBoundaryExample from "./components/errorBoundary";
// import ReactReduxSession from "./components/react-redux-session";
// import CodeSpliting from "./components/codeSpliting/codeSpliting";
// const CodeSpliting = React.lazy(() => import("./components/codeSpliting/codeSpliting"));

function App() {
  // const [show, setShow] = React.useState(false);

  return (
    <div className="App">
      {/* <ReactReduxSession /> */}
      {/* <button onClick={() => setShow(!show)}>Show Component</button>
      {show && (
        <Suspense fallback="Loading...">
        <CodeSpliting />
        </Suspense>
      )} */}
      {/* <ErrorBoundaryExample /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
