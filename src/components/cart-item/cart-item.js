import React from "react";
import PropTypes from "prop-types";

import "./cart-item.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{`${quantity} x ${price}`}</span>
    </div>
  </div>
);

const propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

CartItem.propTypes = propTypes;

export default CartItem;
