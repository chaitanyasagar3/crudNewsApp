import express from "express";
import NewsAPI from "newsapi";

const newsController = express.Router();

newsController.get("/", async (req, res) => {
  try {
    console.log("in news controller")
    const { category } = req.query;
    console.log(category);
    const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
    const response = await newsapi.v2.everything({
      q : category,
      language: "en",
      sortBy: "relevancy",
      page: 2,
    });
    res.json(response.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default newsController;
