import React from "react";
import "../components/Messages/msg.css";
import "../components/chatmsg.css";
import dataArray from "../Data/Data";
import { useState, useEffect } from "react";
const Chatmsg = ({ message }) => {
  const [contactName, setContactName] = useState("");
  const [contactImage, setContactImage] = useState("");

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const storedName = localStorage.getItem("clickedName");
    const storedImage = localStorage.getItem("clickedImage");
    if (storedName) {
      setContactName(storedName);
    }
    if (storedImage) {
      setContactImage(storedImage);
    }
    localStorage.getItem("clickedName");
    localStorage.getItem("clickedImage");
  }, []);

  useEffect(() => {
    // Whenever a new message is received, add it to the messages array
    if (message) {
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  }, [message]);

  return (
    <div className="message-owner">
      <div className="messageinfo">
        <img src={contactImage} alt="" className="messageinFo" />
        <h4>{contactName}</h4>
        <span className="span">1.35PM</span>
      </div>
      <div className="messagecontent">
        {messages.map((msg, index) => (
          <p key={index} className="ptag">
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Chatmsg;
