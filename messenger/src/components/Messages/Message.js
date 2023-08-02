import React, { useState, useEffect } from "react";
import Chatmsg from "../Chatmsg";
import "../Messages/msg.css";
import Reply from "../Reply";

const Message = ({ receivedMessage, chatConversation, receiver }) => {
  // State to store the fetched data
  const [data, setData] = useState(null);

  // Function to fetch the API and store the data in the state
  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:4000/chat/messages");
      if (response.ok) {
        const data = await response.json();
        setData(data); // Store the fetched data in the state
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
      {/* Pass the 'data' prop to the Chatmsg component */}
      <Chatmsg message={receivedMessage} chatConversation={chatConversation} data={data} />
    </div>
  );
};

export default Message;
