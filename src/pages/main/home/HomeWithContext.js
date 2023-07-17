import React, { useState, createContext } from "react";
import { useMediaQuery } from "react-responsive";

import HomeWide from "./HomeWide";
import HomeNarrow from "./HomeNarrow";

export const ModalContext = createContext();
export const MessageContext = createContext();

export default function HomeWithContext() {
  const homeIsNarrow = useMediaQuery({ query: "(max-aspect-ratio: 4/5)" });
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    errorType: null,
    title: "Thank you for subscribing!",
    content: "Check your mailbox for a confirmation email",
    note: null,
  });

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      <MessageContext.Provider value={{ message, setMessage }}>
        {!homeIsNarrow && <HomeWide />}
        {homeIsNarrow && <HomeNarrow />}
      </MessageContext.Provider>
    </ModalContext.Provider>
  );
}
