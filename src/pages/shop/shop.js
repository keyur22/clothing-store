/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection/collection";
import withSpinner from "../../components/with-spinner/with-spinner";

import {
  selectIsCollectionFetching,
  isCollectionsLoaded,
} from "../../redux/shop/shop-selectors";
import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  isCollectionFetching: PropTypes.bool.isRequired,
  isCollectionsLoaded: PropTypes.bool.isRequired,
  fetchCollectionsAsync: PropTypes.func.isRequired,
};

ShopPage.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
