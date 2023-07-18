import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { NarrowContext } from "../../../App";
import { HomeContext } from "./HomeWithContext";

import SubscribeWide from "./SubscribeWide";
import SubscribeNarrow from "./SubscribeNarrow";

export const SubscribeContext = createContext();

export default function SubscribeWithContext() {
  const { homeIsNarrow } = useContext(NarrowContext);
  const { setModalOpen, setMessage } = useContext(HomeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name.length === 0 && email.length === 0) {
      setMessage({
        error: true,
        errorType: "blanks",
        title: "Name and email are blank!",
        content: "Please fill in your name and email before subscribing",
        note: null,
      });
    } else if (name.length === 0) {
      setMessage({
        error: true,
        errorType: "blanks",
        title: "Name is blank!",
        content: "Please fill in your name before subscribing",
        note: null,
      });
    } else if (email.length === 0) {
      setMessage({
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
          setMessage(response.data);
        })
        .catch((error) => {
          setMessage({
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
    setModalOpen(true);
  };

  return (
    <SubscribeContext.Provider value={{ name, setName, email, setEmail, handleSubmit }}>
      {!homeIsNarrow && <SubscribeWide />}
      {homeIsNarrow && <SubscribeNarrow />}
    </SubscribeContext.Provider>
  );
}
