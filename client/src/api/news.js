import axios from "./axios";

export const getNewsByCategory = async (category) => {
  try {
    const response = await axios.get("/news", {
      params: { category: category },
    });
    const articles = response.data;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error(error);
  }
};
