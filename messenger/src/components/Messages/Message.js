import React from "react";
import Chatmsg from "../Chatmsg";
import "../Messages/msg.css";
import Reply from "../Reply";
const Message = () => {
  return (
    <div className="messages">
      <Chatmsg />
      <Reply />
      <Chatmsg />
    </div>
  );
};

export default Message;
