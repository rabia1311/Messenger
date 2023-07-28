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
      // Save the message to the server using the POST method with JSON data
      fetch(`http://localhost:4000/chat/send/${chatid}`, {
        // Change the endpoint to match your server route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content, // Message content
          chat: chatid, // Chat ID
          // Assuming you have some mechanism to get the senderId (recipientId in this case)
          sender: "64c212eec944ec0257b4c99c", // Replace with the actual senderId
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Message sent successfully:", data);

          // Clear the input field after sending the message
          setContent("");

          onMessageReceive(content);

          // Fetch all messages for the particular _id after sending the message
          return fetch(
            "http://localhost:4000/chat/list/64c212eec944ec0257b4c99c/64c2135cac8c608dca5e88d9"
          );
        })
        .then((response) => response.json())
        .then((allMessages) => {
          console.log("All messages for the _id:", allMessages);

          // Show the details posted in the network tab response
          console.log("Network tab response:", allMessages);
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
