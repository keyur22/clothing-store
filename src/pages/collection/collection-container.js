import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";

import { isCollectionsLoaded } from "../../redux/shop/shop-selectors";

import withSpinner from "../../components/with-spinner/with-spinner";
import CollectionPage from "./collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !isCollectionsLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

const propTypes = {
  isLoading: PropTypes.bool,
};

const defaultProps = {
  isLoading: false,
};

CollectionContainer.propTypes = propTypes;
CollectionContainer.defaultProps = defaultProps;

export default CollectionContainer;
