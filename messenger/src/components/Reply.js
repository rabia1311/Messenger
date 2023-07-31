import React, { useEffect, useState } from "react";
import "../components/Messages/msg.css";
import "../components/chatmsg.css";

const Reply = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Get the _id from local storage
    const userId = "64c212eec944ec0257b4c99c"; // You may need to update this part to get the actual user ID from local storage.

    // Make an HTTP GET request to fetch messages
    fetch(`http://localhost:4000/chat/list/${userId}/64c2135cac8c608dca5e88d9`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch messages.");
        }
        return response.json();
      })
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  return (
    <div className="message-owner">
      <div className="messageinfooo">
        {/* Assuming you have the sender's name available in the data */}
        <h4>{messages.length > 0 ? messages[0].user.name : "Sender Name"}</h4>
        {/* Assuming you have a timestamp available in the data */}
        <span className="span">
          {messages.length > 0 ? messages[0].timestamp : "Timestamp"}
        </span>
      </div>
      <div className="messagecontent">
        {messages.map((message, index) => (
          <p key={index} className="paragraph">
            {message.chat}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Reply;
