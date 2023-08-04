import React, { useEffect, useState } from "react";
import "../components/Messages/msg.css";
import "../components/chatmsg.css";

const Reply = ({ receiver }) => {
  const [messages, setMessages] = useState([]);
  const userId = localStorage.getItem("_id");

  useEffect(() => {
    console.log(receiver);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const senderId = localStorage.getItem("chatUserId");
      const receiverId = localStorage.getItem("_id");
      const apiUrl = `http://localhost:4000/chat/messages/${senderId}/${receiverId}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      console.log("API Response:", data);
      setMessages(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

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
          <p key={index} className="paragraph">
            {message.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Reply;
