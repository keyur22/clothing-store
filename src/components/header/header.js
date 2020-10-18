import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";

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

const Header = ({ currentUser, hidden }) => (
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
          onClick={() => auth.signOut()}
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

export default connect(mapStateToProps)(Header);
