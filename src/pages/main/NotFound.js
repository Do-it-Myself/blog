import React, { useContext } from "react";
import { NarrowContext } from "../../App";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { homeIsNarrow } = useContext(NarrowContext);

  return (
    <div className="notfound">
      <div className={homeIsNarrow ? "notfoundNarrow" : "notfoundWide"}>
        <div className="whitebox">
          <img
            src={require("../../assets/images/notfound.png")}
            alt="Not found icon created by Freepik - Flaticon"
            className="image"
          />
          <div className="title">Oops! Page not found</div>
          <div className="content">
            This page doesn’t exist or was removed - we suggest you to go back
            to the home page
          </div>
          <div className="buttonDiv">
            <Link to="/" className="button">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
