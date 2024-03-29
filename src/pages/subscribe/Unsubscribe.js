import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "src/pages/main/Loading";
import DisplayTemp, { isErrorMessage } from "src/pages/DisplayTemp";
import { Link } from "react-router-dom";

const AskUnsubscribeDisplay = ({ confirmUnsubscribe, cancelUnsubscribe }) => (
  <DisplayTemp
    img={require("src/assets/images/rain.png")}
    title="Unsubscribe?"
    content="If you unsubscribe, we are not able to send you any updates from our blog"
    button={
      <>
        <button
          className="button"
          style={{ width: "7.5em" }}
          onClick={confirmUnsubscribe}
        >
          Unsubscribe
        </button>
        <button
          className="buttonlight"
          style={{ width: "7.5em" }}
          onClick={cancelUnsubscribe}
        >
          Cancel
        </button>
      </>
    }
  />
);

const CancelUnsubscribeDisplay = () => (
  <DisplayTemp
    img={require("src/assets/images/sun.png")}
    title="Excellent choice!"
    content="We will keep you updated with our newsletter"
    button={
      <Link to="/" className="button">
        Go Home
      </Link>
    }
  />
);

const ConfirmUnsubscribeDisplay = ({ message, resubscribe }) => (
  <DisplayTemp
    img={
      message.error
        ? require("src/assets/images/doubts.png")
        : require("src/assets/images/rain.png")
    }
    title={message.title}
    content={message.content}
    button={
      <>
        <Link
          to="/"
          style={message.error ? {} : { width: "7.5em" }}
          className="button"
        >
          Go Home
        </Link>
        {!message.error && (
          <button
            className="buttonlight"
            style={{ width: "7.5em" }}
            onClick={resubscribe}
          >
            Resubscribe
          </button>
        )}
      </>
    }
  />
);

const ResubscribeDisplay = ({ message }) => (
  <DisplayTemp
    img={
      message.error
        ? require("src/assets/images/doubts.png")
        : require("src/assets/images/sun.png")
    }
    title={message.title}
    content={message.content}
    button={
      <>
        <Link to="/" className="button">
          Go Home
        </Link>
      </>
    }
  />
);

export default function Unsubscribe() {
  const [page, setPage] = useState();

  const resubscribe = () => {
    setPage(<Loading />);
    const queryParameters = new URLSearchParams(window.location.search);
    const a = queryParameters.get("a");
    const b = queryParameters.get("b");
    const c = queryParameters.get("c");
    const url = `https://due8wf0bb8.execute-api.eu-west-2.amazonaws.com/${process.env.REACT_APP_ENV}`;
    axios
      .get(`${url}?a=${a}&b=${b}&c=${c}`)
      .then((response) => {
        if (!isErrorMessage(response.data)) {
          throw new Error(response.data.errorMessage ?? null);
        }
        setPage(<ResubscribeDisplay message={response.data} />);
      })
      .catch((error) => {
        setPage(
          <ResubscribeDisplay
            message={{
              error: true,
              errorType: "catch error",
              title: "Oops... something went wrong",
              content: "We can’t process your resubscription now",
              note: error,
            }}
          />
        );
      });
  };

  const confirmUnsubscribe = () => {
    setPage(<Loading />);
    const queryParameters = new URLSearchParams(window.location.search);
    const a = queryParameters.get("a");
    const b = queryParameters.get("b");
    const url = `https://0wmxrra8k5.execute-api.eu-west-2.amazonaws.com/${process.env.REACT_APP_ENV}`;
    axios
      .get(`${url}?a=${a}&b=${b}`)
      .then((response) => {
        if (!isErrorMessage(response.data)) {
          throw new Error(response.data.errorMessage ?? null);
        }
        setPage(
          <ConfirmUnsubscribeDisplay
            message={response.data}
            resubscribe={resubscribe}
          />
        );
      })
      .catch((error) => {
        setPage(
          <ConfirmUnsubscribeDisplay
            message={{
              error: true,
              errorType: "catch error",
              title: "Oops... something went wrong",
              content: "We can’t process your unsubscription now",
              note: error,
            }}
            resubscribe={resubscribe}
          />
        );
      });
  };

  const cancelUnsubscribe = () => {
    setPage(<CancelUnsubscribeDisplay />);
  };

  useEffect(() => {
    setPage(
      <AskUnsubscribeDisplay
        confirmUnsubscribe={confirmUnsubscribe}
        cancelUnsubscribe={cancelUnsubscribe}
      />
    );
  }, []);

  return page;
}
