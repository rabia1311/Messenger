import React, { useState, useEffect } from "react";
import Chatmsg from "../Chatmsg";
import "../Messages/msg.css";
import Reply from "../Reply";

const Message = ({
  receivedMessage,
  chatConversation,
  receiver,
  selectedChat,
}) => {
  // State to store the fetched data
  const [messageData, setMessageData] = useState(null);

  console.log(receivedMessage);
  console.log(chatConversation);
  console.log(receiver);
  console.log(selectedChat);

  return (
    <div className="messages">
      <Reply receiver={receiver} />
      <Chatmsg chatConversation={chatConversation} />
    </div>
  );
};

export default Message;
