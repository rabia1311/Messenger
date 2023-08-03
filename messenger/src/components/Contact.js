import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/contact.css";

const Contact = ({ onNameClick, onChatConversation }) => {
  const [userChats, setUserChats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/chat/getuser")
      .then((response) => {
        // Filter out the currently logged-in user using localStorage _id
        const currentUserID = localStorage.getItem("_id");
        const filteredChats = response.data.filter(
          (user) => user._id !== currentUserID
        );

        setUserChats(filteredChats);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Log the userChats data whenever it changes
    console.log("userChats:", userChats);
  }, [userChats]);

  const handleNameClick = (name, image, _id) => {
    // Call the prop function to send the name, image, and _id to the parent component
    onNameClick(name, image, _id);

    console.log("Clicked name:", name);
    console.log("User ID:", _id);
    localStorage.setItem("chatUserId", _id);

    // Check if _id is defined before making the query
    // ... (you may need to add the missing code here)
  };

  return (
    <div className="chats">
      {userChats.map((chat, index) => (
        <div className="userchat-container" key={index}>
          <img
            className="img"
            src={
              "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
            }
            alt="User"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />

          <div className="userchatinfo">
            {/* Pass the arguments in the correct order */}
            <span
              onClick={() =>
                handleNameClick(chat.name, chat.image, chat._id, onNameClick)
              }
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
