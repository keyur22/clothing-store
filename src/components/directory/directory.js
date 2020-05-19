import React from "react";
import MenuItem from "../menu-item/menu-item";
import sectionsData from "./sections.data";

import "./directory.scss";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: sectionsData,
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
