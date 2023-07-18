import React from "react";
import "../components/Messages/msg.css";
import "../components/chatmsg.css";
import dataArray from "../Data/Data";
import { useState, useEffect } from "react";
const Chatmsg = () => {
  const [contactName, setContactName] = useState("");
  const [contactImage, setContactImage] = useState("");
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
  return (
    <div className="message-owner">
      <div className="messageinfo">
        <img src={contactImage} alt="" className="messageinFo" />
        <h4>{contactName}</h4>
        <span className="span">1.35PM</span>
      </div>
      <div className="messagecontent">
        <p className="ptag">Hello how are you ? </p>
      </div>
    </div>
  );
};

export default Chatmsg;
