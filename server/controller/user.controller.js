import express from "express";
import { User } from "../database/models/index.js";
import sha256 from "sha256";

const userController = express.Router();
/**
 * GET/
 * retrieve and display all Users in the User Model
 */
userController.get("/", (req, res) => {
  User.find({}, (err, result) => {
    res.status(200).json({
      data: result
    });
  });
});

/**
 * POST/
 * Add a new User to your database
 */
userController.post("/add-user", async (req, res) => {
  try {
    const { username, password } = req.body;
  console.log(sha256(password))
const userData = {
    username,
    hashedPassword: sha256(password)
  };
  const newUser = new User(userData);
  await newUser.save()
      res.json(newUser);
  } catch(e) {
    res.status(400).send(e.message || "unable to save to database");
  }
  
});


export default userController;
