import React, { useContext } from "react";
import { SubscribeContext } from "./SubscribeWithContext";

export default function SubscribeNarrow() {
  const { name, setName, email, setEmail, buttonContent, handleSubmit } =
    useContext(SubscribeContext);

  return (
    <div className="subscribeFlex">
      <div style={{ position: "relative" }}>
        <div className="subscribeBox">
          <div className="stayTuned">Stay tuned</div>
          <div className="wantToReceiveUpdates">
            Receive updates of the blog directly in your inbox
          </div>
          <div className="firstRowFlex">
            <input
              className="inputName"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              style={{ width: "calc(var(--subscribeNarrowWidth)*0.33)" }}
            ></input>
            <div
              style={{ width: "calc(var(--subscribeNarrowWidth)*0.09)" }}
            ></div>
            <button className="subscribeButton" onClick={handleSubmit}>
              {buttonContent}
            </button>
          </div>
          <input
            className="inputEmail"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ width: "calc(var(--subscribeNarrowWidth)*0.63)" }}
          ></input>
        </div>
        <div className="decor"></div>
      </div>
    </div>
  );
}
