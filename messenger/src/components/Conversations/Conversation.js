import React from "react";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../Conversations/convo.css";
import Message from "../Messages/Message";
import Input from "../Input";
const Conversation = () => {
  return (
    <div className="convo">
      <div className="convoinfo">
        <span>
          <h2 className="h2" style={{ marginBottom: "-19px" }}>
            Townsend Seary
          </h2>

          <p>5 minutes ago</p>
        </span>

        <div className="convoicons">
          <WifiCalling3Icon />
          <VideoCallIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <Message />
      <Input />
    </div>
  );
};

export default Conversation;
