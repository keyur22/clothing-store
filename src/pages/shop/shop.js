/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection/collection";
import withSpinner from "../../components/with-spinner/with-spinner";
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  constructor() {
    super();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const collectionsRef = firestore.collection("collections");
    const { updateCollections } = this.props;

    collectionsRef.onSnapshot((snapshot) => {
      const transformedCollections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(transformedCollections);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverviewWithSpinner loading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
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
  updateCollections: PropTypes.func.isRequired,
};

ShopPage.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
