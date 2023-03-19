// Import all dependencies & middleware here
import express from "express";
import bodyParser from "body-parser";
import configureRoutes from "./controller/index.js";
import mongoose from "mongoose";
import cors from "cors";

// Init an Express App.
const app = express();

dotenv.config();


// Use your dependencies here
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use all controllers(APIs) here
configureRoutes(app);

// Start Server here
app.listen(8080, () => {
  console.log("Server is running on port 8080!");
  mongoose.connect("mongodb://localhost/test").then(() => {
    console.log(`Conneted to mongoDB at port 27017`);
  });
});
