import React from "react";
import "./App.css";
import ClassComp, { FuncComp } from "./components/session3/classComp";
import Dumb, { Smart } from "./components/session3/dumbAndSmart";
import StyleComp from "./components/session3/styleComp";
import ChildrenPropComp from "./components/session3/childrenPropComp";
import UseStateHook from "./components/session3/useStateHook";
import UseEffectHook from "./components/session3/useEffectHook";
import UseMemoHook from "./components/session3/useMemoHook";
import { MOCK_DATA } from "./mockData";

function App() {
  // We are using this state to mount & unmount the UseEffectHook component.
  const [show, setShow] = React.useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      {/* <ClassComp msg="Hello" />
      <FuncComp msg="Welcome" /> */}
      {/* <Dumb greet="Hello" />
      <Smart greet="Hi" /> */}
      {/* <StyleComp /> */}
      {/* <ChildrenPropComp name="React JS">
        <p>The library for web and native user interfaces</p>
      </ChildrenPropComp>
      <ChildrenPropComp name="JS" msg="Welcome">
        <h1>JS is front-end scripting language.</h1>
        <p>It has been build by B.Eich.</p>
      </ChildrenPropComp> */}
      {/* <UseStateHook /> */}
      {/* <button onClick={handleShow}>Show/Hide</button>
      {show ? <UseEffectHook /> : null} */}
      <UseMemoHook data={MOCK_DATA} />
    </div>
  );
}

export default App;
