import React, { useState } from "react";
import "../components/Messages/msg.css";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import attach from "../images/attach.png";

const Input = ({ onMessageReceive }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      // Create a new FormData instance
      const formData = new FormData();
      formData.append("message", message);

      // Save the message to the server using the POST method with FormData
      fetch("http://localhost:4000/chat/sendmsg", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Message sent successfully:", data);
          localStorage.setItem(Date.now().toString(), message);
          setMessage("");
          onMessageReceive(message);
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
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
        value={message}
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
          {" "}
          <SendIcon onClick={handleSend} />
        </button>
      </div>
    </div>
  );
};

export default Input;
