import React, { useEffect, useState } from "react";
import "../components/Messages/msg.css";
import "../components/chatmsg.css";

const Reply = ({ receiver }) => {
  const [messages, setMessages] = useState([]);
  console.log(receiver);

  useEffect(() => {
    // Get the _id from local storage
    const userId = "64c212eec944ec0257b4c99c"; // You may need to update this part to get the actual user ID from local storage.

    // Make an HTTP GET request to fetch messages
    fetch(`http://localhost:4000/chat/receive/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch messages.");
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data);
        console.log(data); // Display all the fetched messages in the console
      })
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  return (
    <div className="message-owner">
      <div className="messageinfooo">
        <h4>{receiver}</h4>
        {/* Assuming you have a timestamp available in the data */}
        <span className="span">
          {messages.length > 0 ? messages[0].timestamp : "Timestamp"}
        </span>
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
