import React from "react";
import { Link } from "react-router-dom";
import DisplayTemp from "src/pages/DisplayTemp";

export default function Success() {
  return (
    <DisplayTemp
      img={require("src/assets/images/sun.png")}
      title="Thank you for subscribing!"
      content="You have been added to the newsletter subscription list"
      button={
        <Link to="/" className="button">
          Go Home
        </Link>
      }
    />
  )
}
