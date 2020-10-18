/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

const propTypes = {
  children: PropTypes.node.isRequired,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

const defaultProps = {
  isGoogleSignIn: false,
  inverted: false,
};

CustomButton.propTypes = propTypes;
CustomButton.defaultProps = defaultProps;

export default CustomButton;
