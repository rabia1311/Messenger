import * as React from "react";
import { useState,useEffect } from "react";
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
  const [name, setName] = useState("");
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);


  const handleAddUserClick = () => {
    // Clear the _id from local storage
    localStorage.removeItem("_id");
    localStorage.removeItem("name");

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
        <div className="user-info">
          {name && <p>Welcome, {name}!</p>}
          {/* Add other user information if needed */}
        </div>

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
