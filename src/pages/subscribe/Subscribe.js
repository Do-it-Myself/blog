import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "src/pages/main/Loading";
import DisplayTemp, { isErrorMessage } from "src/pages/DisplayTemp";
import { Link } from "react-router-dom";

const MessageToDisplay = (message) => (
  <DisplayTemp
    img={
      message.error
        ? require("src/assets/images/doubts.png")
        : require("src/assets/images/sun.png")
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

export default function Subscribe() {
  const [page, setPage] = useState(<Loading />);

  const handleSubscribe = () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const a = queryParameters.get("a");
    const b = queryParameters.get("b");
    const url = `https://bgxs6su04k.execute-api.eu-west-2.amazonaws.com/${process.env.REACT_APP_ENV}`;
    axios
      .get(`${url}?a=${a}&b=${b}`)
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
            content: "We can’t process your subscription now",
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
