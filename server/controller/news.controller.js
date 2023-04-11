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
      sortBy: "publishedAt",
    });
    response.articles.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
    const uniqueArticles = response.articles.filter(
      (article, index, self) =>
        index ===
        self.findIndex(
          (a) =>
            a.title === article.title && a.description === article.description
        )
    );
    uniqueArticles.slice(0, 250);
    res.json(uniqueArticles);
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
    console.log(categories);
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

    const uniqueArticles = articles.filter(
      (article, index, self) =>
        index ===
        self.findIndex(
          (a) =>
            a.title === article.title && a.description === article.description
        )
    );
    res.json(uniqueArticles.slice(0, 250));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default newsController;
