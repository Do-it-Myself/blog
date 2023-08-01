import React from "react";
import { Link } from "react-router-dom";
import DisplayTemp from "src/pages/DisplayTemp";

export default function Success() {
  return (
    <DisplayTemp
      img={require("src/assets/images/sun.png")}
      title="Excellent choice!"
      content="We will keep you updated with our newsletter"
      button={
        <Link to="/" className="button">
          Go Home
        </Link>
      }
    />
  )
}
