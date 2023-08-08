import React from "react";
import PropTypes from "prop-types";

// console.log("PropTypes :>> ", PropTypes);

export class ClassComp extends React.PureComponent {
  // static propTypes = {
  //   name: PropTypes.string,
  // };

  render() {
    return (
      <p>
        {this.props.message}, {this.props.name}
      </p>
    );
  }
}

ClassComp.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string.isRequired,
};

////////////////////////////////////////////

const PropTypesComp = (props) => {
  let abc = props.message;

  abc = 1;

  return (
    <div>
      <ClassComp message="Hi" name="Class Component" />
      <p>
        {props.message}, {props.name}
      </p>
    </div>
  );
};

PropTypesComp.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default PropTypesComp;
