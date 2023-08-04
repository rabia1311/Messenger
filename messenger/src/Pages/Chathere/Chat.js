import React from "react";
import "./chat.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Searchbar from "../../components/Searchbar";
import Contact from "../../components/Contact";
import Conversation from "../../components/Conversations/Conversation";

const Chat = ({ onChatConversation }) => {
  const [selectedUser, setSelectedUser] = useState({ name: "", image: "" });
  const [chatConversation, setChatConversation] = useState(null);
  const handleUserSelection = (name, image, _id) => {
    setSelectedUser({ name, image, _id });
  };
  console.log(selectedUser);

  // Callback function to update the 'chatConversation' state

  const handleChatConversation = (data) => {
    setChatConversation(data);
    console.log("Received data from Contact.js:", data);
  };
  console.log(chatConversation);
  return (
    <div className="chat-container">
      <div className="chat_list">
        <Sidebar />
        <Searchbar />
        <Contact
          onNameClick={handleUserSelection}
          onChatConversation={handleChatConversation}
        />
      </div>

      <div className="chat_area">
        <Conversation
          contactName={selectedUser.name}
          contactImage={`http://localhost:4000/Userimg/${selectedUser.image}`}
          chatConversation={chatConversation}
          contactid={selectedUser._id}
        />
      </div>
    </div>
  );
};

export default Chat;
