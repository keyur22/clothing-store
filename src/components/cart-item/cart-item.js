import React from "react";
import PropTypes from "prop-types";

import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  NameContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <span className="price">{`${quantity} x ${price}`}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
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
