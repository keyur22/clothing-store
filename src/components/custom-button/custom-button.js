/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

import "./custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

const propTypes = {
  children: PropTypes.node.isRequired,
  isGoogleSignIn: PropTypes.bool,
};

const defaultProps = {
  isGoogleSignIn: false,
};

CustomButton.propTypes = propTypes;
CustomButton.defaultProps = defaultProps;

export default CustomButton;
