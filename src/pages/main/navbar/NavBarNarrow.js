import React, { useState } from "react";
import { Link } from "react-router-dom";

import DropDownMenu from "src/pages/main/navbar/DropDownMenu";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const handleTitleClick = () => {
    setClick(false);
  };
  return (
    <div className="navbar">
      <div>
        <nav className={click ? "navbarNarrowActive" : "navbarNarrow"}>
          <div className="verticalflexbox">
            <div className="flexbox">
              <div className="title">
                <Link to="/" className="button" onClick={handleTitleClick}>
                  Do it Myself
                </Link>
              </div>
              <button className="item" onClick={handleClick}>
                <img
                  src={require("src/assets/images/menu.png")}
                  alt="menu"
                  className="menu"
                />
              </button>
            </div>
            {click && <DropDownMenu handleClick={handleClick} />}
          </div>
        </nav>
      </div>
    </div>
  );
}
