import * as React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import {
  Button,
  TextField,
  Modal,
  InputLabel,
  Typography,
  Box,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [image, setImage] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNameChange = (event) => setName(event.target.value);
  const handleStatusChange = (event) => setStatus(event.target.value);
  const handleImageChange = (event) => setImage(event.target.files[0]);

  const [adduser, setAdduser] = useState({
    name: "",
    status: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("name", adduser.name);
    formData.append("status", adduser.status);

    try {
      const response = await fetch("http://localhost:4000/chat/adduser", {
        method: "POST",

        body: formData,
      });
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        toast.error("Enter valid credentials");
      } else {
        toast.success(" New person added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setAdduser({
      ...adduser,
      [event.target.name]: event.target.value,
    });
  };
  console.log(adduser);

  //Code for image upload

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  console.log(selectedFile);

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
          <PersonAddAltIcon onClick={handleOpen} />
        </span>
        <span></span>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New User
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="name"
              id="name"
              name="name"
              variant="outlined"
              fullWidth
              value={adduser.name}
              onChange={handleChange}
              sx={{ mt: 2 }}
              required
            />
            <TextField
              label="status"
              id="status"
              name="status"
              variant="outlined"
              fullWidth
              value={adduser.status}
              onChange={handleChange}
              sx={{ mt: 2 }}
              required
            />
            <TextField
              label="image"
              name="image"
              value={adduser.image}
              onChange={handleFileChange}
              variant="outlined"
              margin="normal"
              type="file"
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
          <ToastContainer />
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
