import React from "react";
import "../components/Messages/msg.css";
import "../components/chatmsg.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import "./Conversations/convo.css";

const Chatmsg = ({ message, chatConversation ,data }) => {
  console.log(chatConversation);
  console.log(data);
  const [contactName, setContactName] = useState("");
  const [contactImage, setContactImage] = useState("");
  const [messages, setMessages] = useState([]); // Initialize as an empty array

  const messagesEndRef = useRef(null);
  console.log(message);

  useEffect(() => {
    // Extract and set the conversation details from the chatConversation prop
    if (chatConversation) {
      const { contactName, contactImage, messages } = chatConversation;
      setContactName(contactName);
      setContactImage(contactImage);
      setMessages(messages);
    }
  }, [chatConversation]);

  useEffect(() => {
    // Scroll to the bottom of the message content whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="message-owner">
      <div className="messageinfo">
        <img
          src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
          alt=""
          className="messageinFo"
        />
        <h4>You</h4>
        <span className="span">just now</span>
      </div>
      <div className="messagecontent">
        {chatConversation &&
          chatConversation.map((msg, index) => (
            <p key={index} className="ptag">
              {msg.chat}
            </p>
          ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="messagecontent">
        {message && <p className="ptag">{message}</p>}
      </div>
    </div>
  );
};

export default Chatmsg;
