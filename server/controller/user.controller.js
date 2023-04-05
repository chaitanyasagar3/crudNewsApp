import express from "express";
import { User } from "../database/models/index.js";
import sha256 from "sha256";
import jwt from "jsonwebtoken";
import authentication from "../middleware/authentication.js";
import loginValidator from "../middleware/validations/loginValidator.js";

const userController = express.Router();
/**
 * GET/
 * retrieve and display all Users in the User Model
 */
userController.post("/login", async (req, res) => {
  const { username, password } = req.body || {};

  try {
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send("No user found");
    }
    if (!user.comparePassword(password)) {
      return res.status(400).send("Incorrect password");
    }

    res.status(200).json({
      data: {
        user: {
          ...user.toObject(),
          accessToken: jwt.sign(
            { username: user.username, id: user._id.toString() },
            "news-app-dev"
          ),
          preferences: user.preferences,
        },
      },
    });
  } catch (e) {
    res.status(400).send(e.message || "unable to retrieve data");
  }
});

/**
 * POST/
 * Add a new User to your database
 */
userController.post("/add-user", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      res.status(409).send("User already exists");
      return;
    }
    const userData = {
      username,
      hashedPassword: sha256(password),
    };
    const newUser = new User(userData);
    await newUser.save();
    res.json(newUser);
    console.log(newUser);
  } catch (e) {
    res.status(400).send(e.message || "unable to save to database");
  }
});

userController.get("/me", authentication, async (req, res) => {
  res.json(req.user);
});
/**
 * Post the prefrences**/
userController.post("/update-preferences", async (req, res) => {
  try {
    const { preferences } = req.body;
    const user = await User.findById(req.body.userId);
    user.preferences = preferences;
    await user.save();
    res.json(user.preferences);
  } catch (e) {
    res.status(400).send(e.message || "unable to save to database");
  }
});

export default userController;
