import React, { useEffect, useState } from "react";
import "../components/Messages/msg.css";
import "../components/chatmsg.css";
import dataArray from "../Data/Data";

const Reply = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Get the _id from local storage
    const userId = "64c253dff747366d69ae49a3";

    // Make an HTTP GET request to fetch messages
    fetch(
      `http://localhost:4000/chat/list/64c212eec944ec0257b4c99c/64c2135cac8c608dca5e88d9`
    )
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  return (
    <div className="message-owner">
      <div className="messageinfooo">
        <h4>Forest Kroch</h4>
        <span className="span">1.35PM</span>
      </div>
      <div className="messagecontent">
        {messages.map((message, index) => (
          <p key={index} className="paragraph">
            {message.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Reply;
