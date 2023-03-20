import axios from "./axios";

export const getGeneralNews = async () => {
  try {
    const response = await axios.get("/news", {
      params: { category: "general" },
    });
    const articles = response.data;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error(error);
  }
  
};
