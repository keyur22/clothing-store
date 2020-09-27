import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection/collection";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={match.path} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

const propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

ShopPage.propTypes = propTypes;

export default ShopPage;
