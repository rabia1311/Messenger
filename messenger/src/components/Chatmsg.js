import React from "react";
import "../components/Messages/msg.css";
import "../components/chatmsg.css";
import { useState, useEffect } from "react";
import { useRef } from "react";

const Chatmsg = ({ message, chatConversation }) => {
  const [contactName, setContactName] = useState("");
  const [contactImage, setContactImage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

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
    // Whenever a new message is received, add it to the messages array
    if (message) {
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  }, [message]);

  useEffect(() => {
    // Scroll to the bottom of the message content whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="message-owner">
      <div className="messageinfo">
        <img src={contactImage} alt="" className="messageinFo" />
        <h4>{contactName}</h4>
        <span className="span">just now</span>
      </div>
      <div className="messagecontent">
        {chatConversation &&
          chatConversation.map((msg, index) => (
            <p key={index} className="ptag">
              {msg.content}
            </p>
          ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default Chatmsg;
