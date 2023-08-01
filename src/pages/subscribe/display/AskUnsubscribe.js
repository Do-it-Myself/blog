import React from "react";
import DisplayTemp from "src/pages/DisplayTemp";

export default function AskUnsubscribe() {
  return (
    <DisplayTemp
      img={require("src/assets/images/rain.png")}
      title="Unsubscribe?"
      content="If you unsubscribe, we are not able to send you any updates from our blog"
      button={
        <>
          <button className="button" style={{ width: "8em" }}>
            Unsubscribe
          </button>
          <button className="buttonlight" style={{ width: "8em" }}>
            Cancel
          </button>
        </>
      }
    />
  );
}
