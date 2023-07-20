import * as React from "react";
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

  const handleSubmit = () => {
    // Process form data (name, status, and image) here as needed.
    // For example, you can send this data to a server using fetch or perform any other action.
    console.log("Name:", name);
    console.log("Status:", status);
    console.log("Image:", image);
    handleClose();
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
          <form>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleNameChange}
              sx={{ mt: 2 }}
            />
            <TextField
              id="status"
              label="Status"
              variant="outlined"
              fullWidth
              value={status}
              onChange={handleStatusChange}
              sx={{ mt: 2 }}
            />
            <InputLabel htmlFor="image" sx={{ mt: 2 }}>
              Image
            </InputLabel>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              sx={{ display: "block" }}
            />
            <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
