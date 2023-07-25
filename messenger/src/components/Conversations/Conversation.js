import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Message from "../Messages/Message";
import Input from "../Input";
import "../Conversations/convo.css";

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

const Conversation = ({
  contactName,
  contactImage,
  chatConversation,
  contactid,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  console.log(chatConversation);
  console.log(contactImage);
  console.log(contactName);
  console.log(contactid);

  const handleReceiveMessage = (newMessage) => {
    setMessage(newMessage);
  };
  console.log(message);

  useEffect(() => {
    // No need to fetch the name and image from localStorage anymore
  }, []);

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
          <img className="imghead" src={contactImage} alt="Contact" />
          <div style={{ marginLeft: "10px" }}>
            <h2 className="h2" style={{ marginBottom: "0" }}>
              {contactName}
            </h2>
            <p style={{ margin: "0" }}>5 minutes ago</p>
          </div>
        </span>

        <div className="convoicons"></div>
      </div>
      <Message receivedMessage={message} chatConversation={chatConversation} />
      <Input onMessageReceive={handleReceiveMessage} chatid={contactid} />
    </div>
  );
};

export default Conversation;
