/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item";

import { selectDirectorySections } from "../../redux/directory/directory-selectors";

import { DirectoryContainer } from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </DirectoryContainer>
);

const propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Directory.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
