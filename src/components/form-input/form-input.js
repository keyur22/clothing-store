/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

import "./form-input.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

const defaultProps = {
  label: "",
};

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;
