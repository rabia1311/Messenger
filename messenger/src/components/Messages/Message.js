import React from "react";
import Chatmsg from "../Chatmsg";
import "../Messages/msg.css";
import Reply from "../Reply";
const Message = ({ receivedMessage }) => {
  console.log(receivedMessage);
  return (
    <div className="messages">
      <Reply />
      <Reply />
      <Reply />
      <Chatmsg message={receivedMessage} />
    </div>
  );
};

export default Message;
