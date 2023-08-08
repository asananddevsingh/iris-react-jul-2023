import PropTypes from "prop-types";

export function HelloWorld() {
  return <h1>Hello World From Component.</h1>;
}

export const HelloWorld2 = () => {
  return <h1>Hello World From Component.</h1>;
};

export const MSG = "I am next export";
export const DATE = new Date();

// A file can have one 1 default export. but n numbers of named exports.
export default HelloWorld;
