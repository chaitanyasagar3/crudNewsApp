import express from "express";
import NewsAPI from "newsapi";

const newsController = express.Router();

newsController.get("/category/", async (req, res) => {
  try {
    const { category } = req.query;
    console.log(category);
    const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
    const response = await newsapi.v2.everything({
      q: category,
      language: "en",
      sortBy: "relevancy",
    });
    response.articles.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
    response.articles.slice(0, 250);
    res.json(response.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

newsController.post("/", async (req, res) => {
  try {
    const user = req.body.user; 
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
    const categories = Object.keys(user.preferences).filter(
      (category) => user.preferences[category]
    );
    const response = await Promise.all(
      categories.map((category) =>
        newsapi.v2.everything({
          q: category,
          language: "en",
          sortBy: "publishedAt",
          page: 1,
        })
      )
    );

    const articles = response
      .map((res) => res.articles)
      .reduce((acc, val) => acc.concat(val), [])
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, 250);
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default newsController;
