/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(MenuItem);
