import axios from "./axios";

export const getNewsByCategory = async (category) => {
  try {
    const response = await axios.get("/news/category", {
      params: { category: category },
    });
    const articles = response.data;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error(error);
  }
};

export const getNewsByUserPreferences = async (user) => {
  try {
    const response = await axios.post("/news", {
      headers: { "Content-Type": "application/json" },
      user,
    });
    const articles = response.data;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error(error);
  }
};