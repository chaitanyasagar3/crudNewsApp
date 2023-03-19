import express from 'express';
import NewsAPI from 'newsapi';

const newsController = express.Router();
const newsapi = new NewsAPI(process.env.API_KEY);

newsController.get('/news', async (req, res) => {
  try {
    const { sources, q, category, language, country } = req.query;
    const response = await newsapi.v2.topHeadlines({
      sources,
      q,
      category,
      language,
      country
    });

    res.json(response.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


export default newsController;