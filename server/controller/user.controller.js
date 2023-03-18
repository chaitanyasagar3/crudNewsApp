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
userController.use(loginValidator).post("/login", async (req, res) => {
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
    console.log(sha256(password));
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

userController.post('/news', async (req, res) => {
  try {
    const { apiKey, category } = req.body;

    const newsapi = new NewsAPI(apiKey);

    const response = await newsapi.v2.topHeadlines({
      category,
      language: 'en',
      country: 'us'
    });

    // Format the response into HTML
    let newsHtml = '';
    response.articles.forEach(article => {
      newsHtml += `<div>
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <img src="${article.urlToImage}" />
        <a href="${article.url}" target="_blank">Read more</a>
      </div>`;
    });

    // Send the HTML response to the client
    res.send(newsHtml);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

userController.use(authentication).get("/me", async (req, res) => {
  res.json(req.user);
});

export default userController;
