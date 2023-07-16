import React from "react";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="pogo">
        <h2>Chat</h2>
      </span>
      <div className="user">
        <span>
          <GroupAddOutlinedIcon />
        </span>
        <span>
          <AddCircleOutlineOutlinedIcon />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
