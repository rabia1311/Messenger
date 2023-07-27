import React from "react";
import Chatmsg from "../Chatmsg";
import "../Messages/msg.css";
import Reply from "../Reply";
const Message = ({ receivedMessage, chatConversation }) => {
  console.log(receivedMessage);
  console.log(chatConversation);
  return (
    <div className="messages">
      <Reply />

      <Chatmsg message={receivedMessage} chatConversation={chatConversation} />
    </div>
  );
};

export default Message;
