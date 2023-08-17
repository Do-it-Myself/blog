import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "src/pages/main/Loading";
import DisplayTemp from "src/pages/DisplayTemp";
import { Link } from "react-router-dom";

const isErrorMessage = (message) => {
  return (
    message.hasOwnProperty("error") &&
    message.hasOwnProperty("errorType") &&
    message.hasOwnProperty("title") &&
    message.hasOwnProperty("content") &&
    message.hasOwnProperty("note")
  );
};

const MessageToDisplay = (message) => (
  <DisplayTemp
    img={
      message.error
        ? require("src/assets/images/doubts.png")
        : require("src/assets/images/rain.png")
    }
    title={message.title}
    content={message.content}
    button={
      <Link to="/" className="button">
        Go Home
      </Link>
    }
  />
);

export default function Unsubscribe() {
  const [page, setPage] = useState(<Loading />);

  const handleSubscribe = () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("a");
    const email = queryParameters.get("b");
    const url = "https://0wmxrra8k5.execute-api.eu-west-2.amazonaws.com/dev";
    axios
      .get(`${url}?id=${id}&email=${email}`)
      .then((response) => {
        if (!isErrorMessage(response.data)) {
          throw new Error(response.data.errorMessage ?? null);
        }
        setPage(MessageToDisplay(response.data));
      })
      .catch((error) => {
        setPage(
          MessageToDisplay({
            error: true,
            errorType: "catch error",
            title: "Oops... something went wrong",
            content: "We can’t process your unsubscription now",
            note: error,
          })
        );
      });
  };

  useEffect(() => {
    handleSubscribe();
  }, []);

  return page;
}
