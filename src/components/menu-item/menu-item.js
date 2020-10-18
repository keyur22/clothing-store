/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item.styles";

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history: { push },
  match: { url },
}) => (
  <MenuItemContainer size={size}>
    <BackgroundImageContainer
      imageUrl={imageUrl}
      onClick={() => push(`${url}${linkUrl}`)}
    />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

const propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {
  size: "",
};

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default withRouter(MenuItem);
