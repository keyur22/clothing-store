/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart-actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.scss";

// eslint-disable-next-line no-shadow
const CartIcon = ({ cartItemsCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItemsCount}</span>
  </div>
);

const propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
  cartItemsCount: PropTypes.number.isRequired,
};

CartIcon.propTypes = propTypes;

const mapStateToProps = (state) => ({
  cartItemsCount: state.cart.cartItems.length,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
