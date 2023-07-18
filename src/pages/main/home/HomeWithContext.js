import React, { useState, createContext, useContext } from "react";
import { NarrowContext } from "../../../App";

import Post from "./Post";
import HomeWide from "./HomeWide";
import HomeNarrow from "./HomeNarrow";

export const HomeContext = createContext();
export const ModalContext = createContext(); //del
export const MessageContext = createContext(); //del

const renderPost = (content) => {
  return <Post key={content["id"]} content={content} />;
};

let postJSON = require("../../posts/Posts.json");
let reversedJSON = [...postJSON].reverse();
const postList = [
  reversedJSON[6],
  reversedJSON[3],
  reversedJSON[4],
  reversedJSON[2],
];

export default function HomeWithContext() {
  const { homeIsNarrow } = useContext(NarrowContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState({});

  return (
    <HomeContext.Provider
      value={{
        message,
        setMessage,
        modalOpen,
        setModalOpen,
        postList,
        renderPost,
      }}
    >
      {!homeIsNarrow && <HomeWide />}
      {homeIsNarrow && <HomeNarrow />}
    </HomeContext.Provider>
  );
}
