import React, { useEffect, useState } from "react";
import "../components/Messages/msg.css";
import "../components/chatmsg.css";

const Reply = ({ receiver }) => {
  const [messages, setMessages] = useState([]);
  const userId = localStorage.getItem("_id");

  useEffect(() => {
    console.log(receiver);

    fetch(`http://localhost:4000/chat/receive/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch messages.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received messages:", data);
        setMessages(data);
      })
      .catch((error) => console.error("Error fetching messages:", error));

    if (userId === "64c2135cac8c608dca5e88d9") {
      fetch(
        `http://localhost:4000/chat/list/64c2135cac8c608dca5e88d9/64c212eec944ec0257b4c99c`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch list of messages.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("List of messages:", data);
          setMessages(data);
        })
        .catch((error) =>
          console.error("Error fetching list of messages:", error)
        );
    }
  }, [userId]);

  return (
    <div className="message-owner">
      <div className="messageinfooo">
        <h4>{receiver}</h4>
        <img
          className="imghead"
          src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
          alt="Contact"
        />
        {/* Assuming you have a timestamp available in the data */}
        <span className="span">
          {messages.length > 0 ? messages[0].timestamp : "Timestamp"}
        </span>
      </div>
      <div className="messagecontent">
        {messages.map((message, index) => (
          <p
            key={index}
            className={
              message.userId === "64c212eec944ec0257b4c99c"
                ? "chat"
                : "paragraph"
            }
          >
            {message.userId === "64c2135cac8c608dca5e88d9"
              ? message.chat
              : message.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Reply;
