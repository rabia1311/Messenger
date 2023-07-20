const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
