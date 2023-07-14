import React from "react";
import "../Chathere/chat.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Chat = () => {
  return (
    <div className="flex_screen">
      <div className="left-symbol">
        <div>
          {" "}
          <WhatsAppIcon fontSize="large" style={{ marginBottom: "80px" }} />
        </div>
        <div>
          {" "}
          <MapsUgcOutlinedIcon
            fontSize="large"
            style={{ marginBottom: "10px" }}
          />
        </div>
        <div>
          <PermIdentityOutlinedIcon
            fontSize="large"
            style={{ marginBottom: "10px" }}
          />
        </div>
        <div>
          <StarBorderPurple500OutlinedIcon
            fontSize="large"
            style={{ marginBottom: "10px" }}
          />
        </div>
        <div>
          <Inventory2OutlinedIcon
            fontSize="large"
            style={{ marginBottom: "160px" }}
          />
        </div>
        <div>
          <DarkModeOutlinedIcon
            fontSize="large"
            style={{ marginBottom: "10px" }}
          />
        </div>
        <div>
          <AccountCircleOutlinedIcon
            fontSize="large"
            style={{ marginBottom: "10px" }}
          />
        </div>
      </div>
      <div className="chat_list">
        <h2 className="chathead">
          Chats <GroupAddOutlinedIcon />
          <AddCircleOutlineOutlinedIcon />
        </h2>
      </div>
      <div className="chat_area">Conversations</div>
    </div>
  );
};

export default Chat;
