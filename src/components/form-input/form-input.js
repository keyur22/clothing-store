/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, value, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

const propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = {
  handleChange: () => {},
  label: "",
  value: "",
};

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;
