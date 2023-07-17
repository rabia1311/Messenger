import React from "react";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span className="pogo">
        <h2>Chat</h2>
      </span>
      <div
        className="user"
        style={{ marginTop: "24px", justifyContent: "space-between" }}
      >
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
