import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { HomeContext } from "src/pages/main/home/HomeWithContext";

export default function Modal({ response }) {
  const { message, setMessage, modalOpen, setModalOpen } =
    useContext(HomeContext);
  const [open, setOpen] = useState(modalOpen);

  // so that App.js and Modal.js won't rerender the same time
  useEffect(() => {
    setOpen(modalOpen);
  }, [modalOpen]);

  const handleClose = () => {
    setModalOpen(false);
    setMessage({});
  };

  if (!(message.error !== undefined && open)) {
    return <></>;
  }

  return (
    <Dialog
      className="dialog"
      open={true}
      onClose={handleClose}
      aria-labelledby="subscribe-modal-title"
      aria-describedby="subscribe-modal-description"
    >
      <div className="dialogFlexBox">
        <img
          src={require(`src/assets/images/${
            response.error ? "failure" : "success"
          }.png`)}
          alt="Tick and Cross icons created by Roundicons - Flaticon"
          className="dialogImg"
        ></img>
        <DialogTitle id="subscribe-modal-title" className="dialogTitle">
          {response.title}
        </DialogTitle>
        <DialogContent
          id="subscribe-modal-description"
          className="dialogDescription"
        >
          {response.content}
        </DialogContent>
        <DialogActions>
          <button className="dialogButton" onClick={handleClose}>
            Close this window
          </button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
