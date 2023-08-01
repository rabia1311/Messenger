import * as React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Button,
  TextField,
  Modal,
  InputLabel,
  Typography,
  Box,
} from "@mui/material";

const Navbar = () => {
  // ... Your existing code ...

  const handleAddUserClick = () => {
    // Clear the _id from local storage
    localStorage.removeItem("_id");

    // Navigate to "/home" page
    // Replace the following line with the actual navigation logic you are using (e.g., React Router)
    // For this example, we will use a simple window.location redirection
    window.location.href = "/";
  };

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
          <LogoutIcon onClick={handleAddUserClick} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
