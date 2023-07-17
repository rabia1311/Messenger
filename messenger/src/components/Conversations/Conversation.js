import React, { useState } from "react";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../Conversations/convo.css";
import Message from "../Messages/Message";
import Input from "../Input";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Conversation = () => {
  const [open, setOpen] = useState(false);

  const handleCall = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="convo">
      <div className="convoinfo">
        <span style={{ display: "flex", alignItems: "center" }}>
          <img
            className="imghead"
            src="data:image/jpeg;base64,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"
          />
          <div style={{ marginLeft: "10px" }}>
            <h2 className="h2" style={{ marginBottom: "0" }}>
              Townsend Seary
            </h2>
            <p style={{ margin: "0" }}>5 minutes ago</p>
          </div>
        </span>

        <div className="convoicons">
          <WifiCalling3Icon onClick={handleCall} />
          <VideoCallIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <Message />
      <Input />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="call-modal-title"
        aria-describedby="call-modal-description"
      >
        <Box sx={style}>
          <img
            src="data:image/jpeg;base64,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"
            alt="Call"
            width="50%"
            height="50%"
            style={{
              display: "flex",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <h2 id="call-modal-title">Townsend Seary is calling..</h2>
          <img
            src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsWrgM_ty9y-37NfM83SUJWpARp1Pe7iV1Z4oBHkuzv-3HHTYN"
            onClick={handleClose}
            style={{
              display: "flex",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Conversation;
