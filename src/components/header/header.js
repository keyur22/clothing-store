import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../redux/user/user-actions";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionsLink,
} from "./header.styles";

// eslint-disable-next-line no-shadow
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionsLink to="/shop">SHOP</OptionsLink>
      <OptionsLink to="/shop">CONTACT</OptionsLink>
      {currentUser ? (
        <OptionsLink
          as="div"
          onClick={() => signOutStart()}
          role="presentation"
        >
          SIGN OUT
        </OptionsLink>
      ) : (
        <OptionsLink to="/signin">SIGN IN</OptionsLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

const propTypes = {
  currentUser: PropTypes.shape({}),
  hidden: PropTypes.bool,
  signOutStart: PropTypes.func.isRequired,
};

const defaultProps = {
  currentUser: {},
  hidden: true,
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
