import React from "react";
import "../components/Messages/msg.css";
import "../components/chatmsg.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import "./Conversations/convo.css";

const Chatmsg = ({ message, chatConversation, receivedMessage }) => {
  console.log(chatConversation);
  console.log(receivedMessage);
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
        <h4>You</h4>
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
      <div className="messagecontent">
        <p className="ptag">{receivedMessage}</p>
      </div>
    </div>
  );
};

export default Chatmsg;
