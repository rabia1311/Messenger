import React from "react";
import Chatmsg from "../Chatmsg";
import "../Messages/msg.css";
import Reply from "../Reply";
const Message = ({ receivedMessage, chatConversation, receiver }) => {
  console.log(receivedMessage);
  console.log(chatConversation);
  console.log(receiver);
  return (
    <div className="messages">
      <Reply receiver={receiver} />
      <Chatmsg message={receivedMessage} chatConversation={chatConversation} />
    </div>
  );
};

export default Message;
