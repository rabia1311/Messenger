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

  const handleNameClick = (name, image, _id) => {
    // Call the prop function to send the name and image to the parent component
    onNameClick(name, image, _id);
    console.log("Clicked name:", name);
    console.log("Clicked image:", image);

    // Check if _id is defined before making the query
    if (_id) {
      // Fetch the user data from the server
      fetch(`http://localhost:4000/chat/adduser/${_id}`)
        .then((response) => response.json())
        .then((data) => console.log("User Data:", _id))
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      console.error("_id is undefined. Cannot make the query.");
    }
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
            <span
              onClick={() => handleNameClick(chat.name, chat.image, chat._id)}
            >
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
