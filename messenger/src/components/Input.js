import React, { useState } from "react";
import "../components/Messages/msg.css";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import attach from "../images/attach.png";

const Input = () => {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    console.log(message);
    setIsSent(true);
    setMessage("");
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
        <button className="sendicon" onClick={handleSend}>
          <SendIcon />
        </button>
      </div>
      {/* Display the typed message only after sending */}
      {isSent && <p>Typed Message: {message}</p>}
    </div>
  );
};

export default Input;
