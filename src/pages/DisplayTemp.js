import React, { useContext } from "react";
import { NarrowContext } from "../App";

export const isErrorMessage = (message) => {
  return (
    message.hasOwnProperty("error") &&
    message.hasOwnProperty("errorType") &&
    message.hasOwnProperty("title") &&
    message.hasOwnProperty("content") &&
    message.hasOwnProperty("note")
  );
};

export default function DisplayTemp({ img, title, content, button }) {
  const { homeIsNarrow } = useContext(NarrowContext);

  return (
    <div className="displaytemp">
      <div className={homeIsNarrow ? "displaytempNarrow" : "displaytempWide"}>
        <div className="whitebox">
          <img
            src={img}
            alt="Icon created by Freepik - Flaticon"
            className="image"
          />
          <div className="title">{title}</div>
          <div className="content">{content}</div>
          <div className="buttonDiv">{button}</div>
        </div>
      </div>
    </div>
  );
}
