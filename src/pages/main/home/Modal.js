import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { ModalContext } from "../../../App";

export default function Modal() {
  const modalContextUser = useContext(ModalContext);
  const [open, setOpen] = useState(modalContextUser.modalOpen);

  // so that App.js and Modal.js won't rerender the same time
  useEffect(() => {
    setOpen(modalContextUser.modalOpen);
  }, [modalContextUser.modalOpen]);

  const handleClose = () => {
    modalContextUser.setModalOpen(false);
  };

  return (
    <Dialog
      className="dialog"
      open={open}
      onClose={handleClose}
      aria-labelledby="subscribe-modal-title"
      aria-describedby="subscribe-modal-description"
    >
      <div className="dialogFlexBox">
        <img
          src={require("../../../assets/images/success.png")}
          alt="subscribeModalImage"
          className="dialogImg"
        ></img>
        <DialogTitle id="subscribe-modal-title" className="dialogTitle">
          Thank you for subscribing!
        </DialogTitle>
        <DialogContent
          id="subscribe-modal-description"
          className="dialogDescription"
        >
          Check your mailbox for a confirmation email
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
