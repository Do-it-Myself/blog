import React from "react";

import { Link } from "react-router-dom";

export default function DropDownMenu({ handleClick }) {
  return (
    <div className="dropDownMenu">
      <Link to="/hardware" className="menuItem" onClick={handleClick}>
        Hardware
      </Link>
      <Link
        to="/software"
        className="menuItem"
        onClick={handleClick}
        style={{ marginBottom: "5px" }}
      >
        Software
      </Link>
    </div>
  );
}
