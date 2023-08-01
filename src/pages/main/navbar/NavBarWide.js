import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav className="navbarWide">
        <div className="flexbox">
          <div className="title">
            <Link to="/" className="button">
              Do it Myself
            </Link>
          </div>
          <div className="item">
            <Link to="/hardware" className="button">
              Hardware
            </Link>
            <Link to="/software" className="button">
              Software
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
