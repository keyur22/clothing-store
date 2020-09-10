/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item";

import { selectDirectorySections } from "../../redux/directory/directory-selectors";

import "./directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

const propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Directory.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
