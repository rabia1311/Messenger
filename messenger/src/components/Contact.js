import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/contact.css";

const Contact = ({ onNameClick, onChatConversation }) => {
  const [userChats, setUserChats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/chat/getuser")
      .then((response) => {
        setUserChats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Log the userChats data whenever it changes
    console.log("userChats:", userChats);
  }, [userChats]);

  // ... Rest of the code ...
  // ... Rest of the code ...
  const handleNameClick = (name, image, _id) => {
    // Call the prop function to send the name, image, _id, and userId to the parent component
    onNameClick(name, image, _id);

    console.log("Clicked name:", name);
    console.log("User ID:", _id);

    // Check if _id is defined before making the query
    if (_id) {
      // Assuming senderId is the default sender's ID you want to use
      const senderId = "64be2bee57905d1b5c496540"; // Replace with the default sender's ID

      // Fetch the chat conversation from the server based on _id and senderId
      axios
        .get(`http://localhost:4000/chat/sendmsg/${_id}`)
        .then((response) => {
          const chatConversation = response.data;
          console.log("Chat Conversation:", chatConversation);
          onChatConversation(chatConversation);
        })
        .catch((error) =>
          console.error("Error fetching chat conversation:", error)
        );
    } else {
      console.error("_id is undefined. Cannot make the query.");
    }
  };
  // ... Rest of the code ...

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
            {/* Pass the arguments in the correct order */}
            <span
              onClick={() =>
                handleNameClick(
                  chat.name,
                  chat.image,
                  chat._id,

                  onNameClick
                )
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
