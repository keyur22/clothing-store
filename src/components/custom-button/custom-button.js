import React from "react";
import PropTypes from "prop-types";

import "./custom-button.scss";

const CustomButton = ({ children, ...otherProps }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

const propTypes = {
  children: PropTypes.node.isRequired,
};

CustomButton.propTypes = propTypes;

export default CustomButton;
