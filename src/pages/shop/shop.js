import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview";

import { selectCollections } from "../../redux/shop/shop-selectors";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...collectionProps }) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
);

const propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

ShopPage.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
