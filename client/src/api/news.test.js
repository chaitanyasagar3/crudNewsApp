import { getGeneralNews } from "./news";
import { getScienceNews } from "./news";
import { getSportsNews } from "./news";
import { getEntertainmentNews } from "./news";
import { getHealthNews } from "./news";
import { getBusinessNews } from "./news";
import { getTechnologyNews } from "./news";

import axios from "./axios";

jest.mock("./axios", () => ({
  get: jest.fn(),
}));

describe("getGeneralNews", () => {
  it("should call axios.get with correct params", async () => {
    axios.get.mockResolvedValue({ data: [] });
    await getGeneralNews();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news", {
      params: { category: "general" },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getGeneralNews();
    expect(result).toEqual(mockArticles);
  });

  it("should log error on failure", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);
    console.error = jest.fn(); // Mock console.error method
    await getGeneralNews();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});

describe("getSportsNews", () => {
  it("should call axios.get with correct params", async () => {
    axios.get.mockResolvedValue({ data: [] });
    await getSportsNews();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news", {
      params: { category: "sports" },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getSportsNews();
    expect(result).toEqual(mockArticles);
  });

  it("should log error on failure", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);
    console.error = jest.fn(); // Mock console.error method
    await getSportsNews();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});
describe("getBusinessNews", () => {
  it("should call axios.get with correct params", async () => {
    axios.get.mockResolvedValue({ data: [] });
    await getBusinessNews();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news", {
      params: { category: "business" },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getBusinessNews();
    expect(result).toEqual(mockArticles);
  });

  it("should log error on failure", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);
    console.error = jest.fn(); // Mock console.error method
    await getBusinessNews();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});
describe("getHealthNews", () => {
  it("should call axios.get with correct params", async () => {
    axios.get.mockResolvedValue({ data: [] });
    await getHealthNews();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news", {
      params: { category: "health" },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getHealthNews();
    expect(result).toEqual(mockArticles);
  });

  it("should log error on failure", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);
    console.error = jest.fn(); // Mock console.error method
    await getHealthNews();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});
describe("getScienceNews", () => {
  it("should call axios.get with correct params", async () => {
    axios.get.mockResolvedValue({ data: [] });
    await getScienceNews();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news", {
      params: { category: "science" },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getScienceNews();
    expect(result).toEqual(mockArticles);
  });

  it("should log error on failure", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);
    console.error = jest.fn(); // Mock console.error method
    await getScienceNews();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});

describe("getSportsNews", () => {
  it("should call axios.get with correct params", async () => {
    axios.get.mockResolvedValue({ data: [] });
    await getSportsNews();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news", {
      params: { category: "sports" },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getSportsNews();
    expect(result).toEqual(mockArticles);
  });

  it("should log error on failure", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);
    console.error = jest.fn(); // Mock console.error method
    await getSportsNews();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});

describe("getTechnologyNews", () => {
  it("should call axios.get with correct params", async () => {
    axios.get.mockResolvedValue({ data: [] });
    await getTechnologyNews();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news", {
      params: { category: "technology" },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getTechnologyNews();
    expect(result).toEqual(mockArticles);
  });

  it("should log error on failure", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);
    console.error = jest.fn(); // Mock console.error method
    await getTechnologyNews();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});
describe("getEntertainmentNews", () => {
  it("should call axios.get with correct params", async () => {
    axios.get.mockResolvedValue({ data: [] });
    await getEntertainmentNews();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news", {
      params: { category: "entertainment" },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getEntertainmentNews();
    expect(result).toEqual(mockArticles);
  });

  it("should log error on failure", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);
    console.error = jest.fn(); // Mock console.error method
    await getEntertainmentNews();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});
