import React from "react";
import Chatmsg from "../Chatmsg";
import "../Messages/msg.css";
import Reply from "../Reply";
import { useEffect } from "react";
const Message = ({ receivedMessage, chatConversation, receiver }) => {
  // Function to fetch the API and print the content in the console
  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:4000/chat/messages");
      if (response.ok) {
        const data = await response.json();
        console.log("API Response:", data);
      } else {
        console.log("Failed to fetch messages.");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Call the fetchMessages function once the component is mounted
  useEffect(() => {
    fetchMessages();
  }, []);

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
