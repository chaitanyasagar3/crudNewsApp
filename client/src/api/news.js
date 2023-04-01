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
export const getBusinessNews = async () => {
  try {
    const response = await axios.get("/news", {
      params: { category: "business" },
    });
    const articles = response.data;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error(error);
  }
};
export const getSportsNews = async () => {
  try {
    const response = await axios.get("/news", {
      params: { category: "sports" },
    });
    const articles = response.data;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error(error);
  }
};
export const getEntertainmentNews = async () => {
  try {
    const response = await axios.get("/news", {
      params: { category: "entertainment" },
    });
    const articles = response.data;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error(error);
  }
};
export const getHealthNews = async () => {
  try {
    const response = await axios.get("/news", {
      params: { category: "health" },
    });
    const articles = response.data;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error(error);
  }
};
export const getScienceNews = async () => {
  try {
    const response = await axios.get("/news", {
      params: { category: "science" },
    });
    const articles = response.data;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error(error);
  }
};

export const getTechnologyNews = async () => {
  try {
    const response = await axios.get("/news", {
      params: { category: "technology" },
    });
    const articles = response.data;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error(error);
  }
};
