/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./menu-item.scss";

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history: { push },
  match: { url },
}) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      onClick={() => push(`${url}${linkUrl}`)}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
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
