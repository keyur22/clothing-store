import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop-selectors";
import withSpinner from "../with-spinner/with-spinner";
import CollectionOverview from "./collection-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

const propTypes = {
  isLoading: PropTypes.bool,
};

const defaultProps = {
  isLoading: false,
};

CollectionOverviewContainer.propTypes = propTypes;
CollectionOverviewContainer.defaultProps = defaultProps;

export default CollectionOverviewContainer;
