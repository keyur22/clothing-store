/* eslint-disable no-shadow */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user-actions";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      // eslint-disable-next-line no-alert
      alert("passwords don't match");
      return;
    }

    signUpStart(email, password, displayName);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const propTypes = {
  signUpStart: PropTypes.func.isRequired,
};

SignUp.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
