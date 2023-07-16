import React from "react";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Conversation = () => {
  return (
    <div className="convo">
      <div className="convoinfo">
        <span>Townsend Seary</span>
        <div className="convoicons">
          <WifiCalling3Icon />
          <VideoCallIcon />
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
