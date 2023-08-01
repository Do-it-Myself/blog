import React from "react";
import { Link } from "react-router-dom";
import DisplayTemp from "src/pages/DisplayTemp";

export default function ConfirmUnsubscribe() {
  return (
    <DisplayTemp
      img={require("src/assets/images/rain.png")}
      title="We are sorry to see you go"
      content="You have been removed from the newsletter subscription list"
      button={
        <Link to="/" className="button">
          Go Home
        </Link>
      }
    />
  );
}
