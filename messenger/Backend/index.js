const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
//mongoDB collection store
const mongoDB = require("./db");
const { collection } = require("./Models/User");
mongoDB();

app.use(cors());

const AddUserRouter = require("../Backend/Routes/AddUserRoute");
const SendMessageRouter = require("../Backend/Routes/SendMessageRoute");
const ReceiveRouter = require("../Backend/Routes/ReceiveRoute");
const path = require("path");
const Receive = require("./Models/Receive");

app.use("/chat", AddUserRouter);
app.use("/chat", SendMessageRouter);
app.use("/chat", ReceiveRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
