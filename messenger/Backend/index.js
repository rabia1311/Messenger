const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").createServer(app); // Create HTTP server
const io = require("socket.io")(http); // Create socket.io server
const port = 4000;
app.use(cors());

//mongoDB collection stored
const mongoDB = require("./db");
const { collection } = require("../Backend/Models/AddUser");
mongoDB();

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 50000,
  })
);

const AddUserRouter = require("../Backend/Routes/AddUserRoute");
const SendMessageRouter = require("../Backend/Routes/SendMessageRoute");

const path = require("path");
//saving images in ----
app.use("/Userimg", express.static("Userimg"));
app.use("/Images", express.static("Images"));

app.use("/chat", AddUserRouter);
app.use("/chat", SendMessageRouter);

// Set up a connection event for new WebSocket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Set up events for handling messages
  socket.on("message", (data) => {
    console.log("Received message:", data);

    // Broadcast the received message to all connected clients
    io.emit("message", data);
  });

  // Set up a disconnect event
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

http.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
