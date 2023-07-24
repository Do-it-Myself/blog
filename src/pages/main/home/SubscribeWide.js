import React, { useContext } from "react";
import { SubscribeContext } from "./SubscribeWithContext";

export default function SubscribeWide() {
  const { name, setName, email, setEmail, buttonContent, handleSubmit } =
    useContext(SubscribeContext);

  return (
    <div className="subscribeFlex">
      <div style={{ position: "relative" }}>
        <div className="subscribeBox">
          <div className="stayTuned">Stay tuned</div>
          <div className="wantToReceiveUpdates">
            Want to receive updates of the blog directly in your inbox?
            Subscribe now!
          </div>
          <div className="inputFlex">
            <input
              className="inputName"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              style={{ width: "calc(var(--subscribeWideWidth)*0.2)" }}
            ></input>
            <div
              style={{ width: "calc(var(--subscribeWideWidth)*0.05)" }}
            ></div>
            <input
              className="inputEmail"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{ width: "calc(var(--subscribeWideWidth)*0.75)" }}
            ></input>
          </div>
          <button className="subscribeButton" onClick={handleSubmit}>
            {buttonContent}
          </button>
        </div>
        <div className="decor"></div>
      </div>
    </div>
  );
}