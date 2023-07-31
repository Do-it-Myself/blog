import React from "react";
import { Link } from "react-router-dom";
import DisplayTemp from "../DisplayTemp";

export default function NotFound() {
  return (
    <DisplayTemp
      img={require("../../assets/images/notfound.png")}
      title="Oops! Page not found"
      content="This page doesn’t exist or was removed - we suggest you to go back to the home page"
      button={
        <Link to="/" className="button">
          Go Home
        </Link>
      }
    />
  );
}
