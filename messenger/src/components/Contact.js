import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/contact.css";

const Contact = ({ onNameClick }) => {
  const [userChats, setUserChats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/chat/adduser")
      .then((response) => {
        setUserChats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleNameClick = (name, image) => {
    // Call the prop function to send the name and image to the parent component
    onNameClick(name, image);
    console.log("Clicked name:", name);
    console.log("Clicked image:", image);
  };

  return (
    <div className="chats">
      {userChats.map((chat, index) => (
        <div className="userchat-container" key={index}>
          <img
            className="img"
            src={`http://localhost:4000/Userimg/${chat.image}`}
            alt="User"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />

          <div className="userchatinfo">
            <span onClick={() => handleNameClick(chat.name, chat.image)}>
              {chat.name}
            </span>
            <p>{chat.status}</p>
            <hr className="divider" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
