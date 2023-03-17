const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { userController } = require("./controller/index.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const http = require("http");
const server = http.createServer(app);

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", userController);

const port = process.env.SERVER_PORT || 8080;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let isServerStarted = false;
server.on("listening", () => {
  isServerStarted = true;
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.log(`Port ${port} is already in use. Trying another port...`);
    server.listen(port + 1);
  } else {
    console.error(error);
  }
});

mongoose.connect(process.env.DB_URL).then(() => {
  console.log(`Connected to MongoDB at port 27017`);
});

module.exports = server;
