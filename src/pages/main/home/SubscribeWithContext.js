import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { NarrowContext } from "src/App";
import { HomeContext } from "src/pages/main/home/HomeWithContext";

import SubscribeWide from "src/pages/main/home/SubscribeWide";
import SubscribeNarrow from "src/pages/main/home/SubscribeNarrow";

export const SubscribeContext = createContext();

const isErrorMessage = (message) => {
  return (
    message.hasOwnProperty("error") &&
    message.hasOwnProperty("errorType") &&
    message.hasOwnProperty("title") &&
    message.hasOwnProperty("content") &&
    message.hasOwnProperty("note")
  );
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function SubscribeWithContext() {
  const { homeIsNarrow } = useContext(NarrowContext);
  const { setModalOpen, setMessage } = useContext(HomeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [buttonContent, setButtonContent] = useState("Subscribe");

  const handleSubmit = () => {
    const nameTrim = name.trim()
    const emailTrim = email.trim()

    if (nameTrim.length === 0 && emailTrim.length === 0) {
      setMessage({
        error: true,
        errorType: "blanks",
        title: "Name and email are blank!",
        content: "Please fill in your name and email before subscribing",
        note: null,
      });
    } else if (nameTrim.length === 0) {
      setMessage({
        error: true,
        errorType: "blanks",
        title: "Name is blank!",
        content: "Please fill in your name before subscribing",
        note: null,
      });
    } else if (emailTrim.length === 0) {
      setMessage({
        error: true,
        errorType: "blanks",
        title: "Email is blank!",
        content: "Please fill in your email before subscribing",
        note: null,
      });
    } else if (!validateEmail(emailTrim)) {
      setMessage({
        error: true,
        errorType: "invalid email",
        title: "Invalid email",
        content: "Please fill in a valid email address",
        note: null,
      });
    } else {
      setButtonContent(
        <img
          src={require("src/assets/images/loadingdots.gif")}
          alt="Icon 'loadingdots' from loading.io"
          className="loadingdots"
        />
      );
      const url = `https://kfjrgwgp4a.execute-api.eu-west-2.amazonaws.com/${process.env.REACT_APP_ENV}`;
      axios
        .post(url, { name: nameTrim, email: emailTrim })
        .then((response) => {
          if (!isErrorMessage(response.data)) {
            throw new Error(response.data.errorMessage ?? null);
          }
          setMessage(response.data);
          setButtonContent("Subscribe");
        })
        .catch((error) => {
          setMessage({
            error: true,
            errorType: "catch error",
            title: "Oops... something went wrong",
            content: "We can’t process your subscription now",
            note: error,
          });
          setButtonContent("Subscribe");
        });
      setName("");
      setEmail("");
    }
    setModalOpen(true);
  };

  return (
    <SubscribeContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        buttonContent,
        setButtonContent,
        handleSubmit,
      }}
    >
      {!homeIsNarrow && <SubscribeWide />}
      {homeIsNarrow && <SubscribeNarrow />}
    </SubscribeContext.Provider>
  );
}
