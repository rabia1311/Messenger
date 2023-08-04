import React, { useState } from "react";
import "../components/Messages/msg.css";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import attach from "../images/attach.png";

const Input = ({ onMessageReceive, chatid }) => {
  const [content, setContent] = useState("");
  console.log(chatid);
  const handleSend = () => {
    if (content.trim() !== "") {
      // Get the senderId and receiverId from localStorage
      const senderId = localStorage.getItem("_id");
      const receiverId = localStorage.getItem("chatUserId");

      if (!senderId || !receiverId) {
        console.error("Sender or receiver ID not found in localStorage.");
        return;
      }

      // Prepare the common headers and data for the fetch
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content, // Message content
          sender: senderId, // Sender ID from localStorage
          receiver: receiverId, // Receiver ID from localStorage
        }),
      };

      // Construct the endpoint using senderId and receiverId
      const endpoint = `http://localhost:4000/chat/send/${senderId}/${receiverId}`;

      // Send the message to the appropriate endpoint
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("Message sent successfully:", data);
          console.log("Message sent successfully:", content);
          // Clear the input field after sending the message
          setContent("");

          const getMessagesEndpoint = `http://localhost:4000/chat/messages/${senderId}/${receiverId}`;
          // You may need to adjust the endpoint based on the API's requirements for fetching messages.
          // For example, if you need to pass the senderId and receiverId as query parameters, modify the endpoint accordingly.

          fetch(getMessagesEndpoint)
            .then((response) => response.json())
            .then((messagesData) => {
              console.log("All Messages:", messagesData);
              // Do whatever you want with the messagesData, e.g., display it in the UI.
            })
            .catch((error) => {
              console.error("Error fetching messages:", error);
            });
        })

        .catch((error) => {
          console.error("Error sending message:", error);
        });
    }
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="input">
      <SentimentSatisfiedAltIcon />
      <input
        type="text"
        placeholder="Type something..."
        className="custom-input"
        style={{
          width: "80%", // Increase the width to 100%
          color: "gray", // Change the color to gray
          border: "none", // Remove the borders
          outline: "none",
          height: "80%",
        }}
        value={content}
        onChange={handleChange}
      />
      <div
        className="send"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <img src={attach} alt="" className="imgpic" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src="" alt="" />
        </label>
        <button className="sendicon">
          <SendIcon onClick={handleSend} />
        </button>
      </div>
    </div>
  );
};

export default Input;
