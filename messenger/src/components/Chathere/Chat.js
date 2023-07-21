import React from "react";
import "../Chathere/chat.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import Sidebar from "../Sidebar";
import Searchbar from "../Searchbar";
import Contact from "../Contact";
import Conversation from "../Conversations/Conversation";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState({ name: "", image: "" });
  const handleUserSelection = (name, image) => {
    setSelectedUser({ name, image });
  };
  console.log(selectedUser);
  return (
    <div className="chat-container">
      <div className="chat_list">
        <Sidebar />
        <Searchbar />
        <Contact onNameClick={handleUserSelection} />
      </div>

      <div className="chat_area">
        <Conversation
          contactName={selectedUser.name}
          contactImage={`http://localhost:4000/Userimg/${selectedUser.image}`}
        />
      </div>
    </div>
  );
};

export default Chat;
