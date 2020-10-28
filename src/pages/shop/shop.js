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
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionsRef = firestore.collection("collections");
    const { updateCollections } = this.props;

    collectionsRef.onSnapshot((snapshot) => {
      const transformedCollections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(transformedCollections);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={match.path} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
