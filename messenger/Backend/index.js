const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
app.use(cors());

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
const path = require("path");
app.use("/Userimg", express.static("Userimg"));

app.use("/chat", AddUserRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
