import React from "react";

export default function Subscribe() {
  return (
    <div className="subscribeFlex">
      <div style={{position: "relative"}}>
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
              style={{ width: "calc(var(--subscribeWideWidth)*0.2)" }}
            ></input>
            <div
              style={{ width: "calc(var(--subscribeWideWidth)*0.05)" }}
            ></div>
            <input
              className="inputEmail"
              placeholder="example@gmail.com"
              style={{ width: "calc(var(--subscribeWideWidth)*0.75)" }}
            ></input>
          </div>
          <button className="subscribeButton" onClick={() => alert("Clicked")}>
            Subscribe
          </button>
        </div>
        <div className="decor"></div>
      </div>
    </div>
  );
}
