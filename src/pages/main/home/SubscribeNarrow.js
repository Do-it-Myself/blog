import React, { useState, useContext } from "react";
import axios from "axios";
import { ModalContext, MessageContext } from "./HomeWithContext";

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const modalContextUser = useContext(ModalContext);
  const messageContextUser = useContext(MessageContext);

  const handleSubmit = () => {
    if (name.length === 0 && email.length === 0) {
      messageContextUser.setMessage({
        error: true,
        errorType: "blanks",
        title: "Name and email are blank!",
        content: "Please fill in your name and email before subscribing",
        note: null,
      });
    } else if (name.length === 0) {
      messageContextUser.setMessage({
        error: true,
        errorType: "blanks",
        title: "Name is blank!",
        content: "Please fill in your name before subscribing",
        note: null,
      });
    } else if (email.length === 0) {
      messageContextUser.setMessage({
        error: true,
        errorType: "blanks",
        title: "Email is blank!",
        content: "Please fill in your email before subscribing",
        note: null,
      });
    } else {
      const url = "https://kfjrgwgp4a.execute-api.eu-west-2.amazonaws.com/dev";
      axios
        .post(url, { action: "subscribe", name: name, email: email })
        .then((response) => {
          messageContextUser.setMessage(response.data);
        })
        .catch((error) => {
          messageContextUser.setMessage({
            error: true,
            errorType: "catch error",
            title: "Oops... something went wrong",
            content: "We can’t process your subscription now",
            note: error,
          });
        });
      setName("");
      setEmail("");
    }
    modalContextUser.setModalOpen(true);
  };

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
              Subscribe
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
