import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart-selectors";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

CartDropdown.propTypes = propTypes;

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
