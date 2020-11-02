/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview-container";
import CollectionContainer from "../collection/collection-container";

import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  fetchCollectionsAsync: PropTypes.func.isRequired,
};

ShopPage.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
