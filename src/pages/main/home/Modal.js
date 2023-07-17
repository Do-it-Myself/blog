import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { ModalContext, MessageContext } from "./HomeWithContext";

export default function Modal({ message }) {
  const modalContextUser = useContext(ModalContext);
  const messageContextUser = useContext(MessageContext);
  const [open, setOpen] = useState(modalContextUser.modalOpen);

  // so that App.js and Modal.js won't rerender the same time
  useEffect(() => {
    setOpen(modalContextUser.modalOpen);
  }, [modalContextUser.modalOpen]);

  const handleClose = () => {
    modalContextUser.setModalOpen(false);
    // messageContextUser.setMessage({
    //   error: null,
    //   errorType: null,
    //   title: null,
    //   content: null,
    //   note: null,
    // });
  };

  return (
    <Dialog
      className="dialog"
      // {messageContextUser.message.error !== null && open}
      open={open}
      onClose={handleClose}
      aria-labelledby="subscribe-modal-title"
      aria-describedby="subscribe-modal-description"
    >
      <div className="dialogFlexBox">
        <img
          src={require(`../../../assets/images/${
            message.error ? "failure" : "success"
          }.png`)}
          alt="subscribeModalImage"
          className="dialogImg"
        ></img>
        <DialogTitle id="subscribe-modal-title" className="dialogTitle">
          {message.title}
        </DialogTitle>
        <DialogContent
          id="subscribe-modal-description"
          className="dialogDescription"
        >
          {message.content}
        </DialogContent>
        <DialogActions>
          <button className="dialogButton" onClick={handleClose}>
            {message.error ? "Try again" : "Close this window"}
          </button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
