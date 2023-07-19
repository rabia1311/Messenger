import React from "react";

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
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
