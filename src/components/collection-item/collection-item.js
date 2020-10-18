/* eslint-disable no-shadow */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart-actions";

import {
  CollectionItemContainer,
  BackgroundImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

const propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

CollectionItem.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
