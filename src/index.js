import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import FirstComponent from "./components/firstComponent";
import SecondComponent from "./components/secondComponent";
import ThirdComponent from "./components/thirdComponent";
import FourthComponent from "./components/fourthComponent";
import Parent from "./components/parentAndChild";

// Named import.
// import { HelloWorld  } from "./components/helloWorld";

// Named import with alias.
// import { HelloWorld as Abc } from "./components/helloWorld";

// Default import.
// import MyComp from "./components/helloWorld";

// Mixed imports (default & named & aliased)
// import MyComp, { MSG, DATE as Today } from "./components/helloWorld";

// console.log("MSG ::", MSG);
// console.log("Today ::", Today);

// JS + HTML = JSX.
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MyComp />);

// root.render(<FirstComponent />);

// root.render(<SecondComponent name="React JS" age={20} />);

// root.render(<FourthComponent action="incremnt" />);

root.render(<Parent />);
