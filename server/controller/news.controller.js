import express from "express";
import NewsAPI from "newsapi";

const newsController = express.Router();

newsController.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
    const response = await newsapi.v2.topHeadlines({
      category,
    });
    res.json(response.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default newsController;
