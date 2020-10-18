/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

// eslint-disable-next-line no-shadow
const CartIcon = ({ cartItemsCount, toggleCartHidden }) => (
  <CartIconContainer onClick={() => toggleCartHidden()}>
    <ShoppingIconContainer />
    <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
  </CartIconContainer>
);

const propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
  cartItemsCount: PropTypes.number.isRequired,
};

CartIcon.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
