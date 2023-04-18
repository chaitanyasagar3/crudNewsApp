import { getNewsByCategory } from "./news";
import { getNewsByUserPreferences } from "./news";
import { getNewsBySearch } from "./news";
import axios from "./axios";

jest.mock("./axios", () => ({
  get: jest.fn(),
  post: jest.fn(),

}));

describe("getNewsByCategory", () => {
  it("should call axios.get with correct params", async () => {
    const category = "general";
    axios.get.mockResolvedValue({ data: [] });
    await getNewsByCategory(category);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news/category", {
      params: { category: category },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getNewsByCategory();
    expect(result).toEqual(mockArticles);
  });

  it("should log error on failure", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);
    console.error = jest.fn(); // Mock console.error method
    await getNewsByCategory();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});

describe("getNewsByUserPreferences", () => {
  it("should call axios.post with correct params", async () => {
    const user = {
      "hashedPassword": "b285e393a516e7c0cdf900b1f1a79c270d4733cfc6d93285ff41f2a80445fef4",
      "username": "Chaitanya",
      "preferences": {
        "general": "true",
        "business": "false",
        "entertainment": "false",
        "health": "false",
        "science": "false",
        "sports": "false",
        "technology": "false"
      }
    }
    axios.post.mockResolvedValue({ data: [] });
    await getNewsByUserPreferences(user);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("/news", {
      headers: { "Content-Type": "application/json" },
      user,
    });
  });
  
  it("should return articles on success", async () => {
    const user = {
      "hashedPassword": "b285e393a516e7c0cdf900b1f1a79c270d4733cfc6d93285ff41f2a80445fef4",
      "username": "Chaitanya",
      "preferences": {
        "general": "true",
        "business": "false",
        "entertainment": "false",
        "health": "false",
        "science": "false",
        "sports": "false",
        "technology": "false"
      }
    }
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.post.mockResolvedValue({ data: mockArticles });
    const result = await getNewsByUserPreferences(user);
    expect(result).toEqual(mockArticles);
  });
});

describe("getNewsBySearch", () => {
  it("should call axios.get with correct params", async () => {
    const search = "general";
    axios.get.mockResolvedValue({ data: [] });
    await getNewsBySearch(search);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news/search", {
      params: { query: search },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getNewsBySearch();
    expect(result).toEqual(mockArticles);
  });
});

// import { getGeneralNews } from "./news";

// import axios from "./axios";

// jest.mock("./axios", () => ({
//   get: jest.fn(),
// }));

// describe("getGeneralNews", () => {
//   it("should call axios.get with correct params", async () => {
//     axios.get.mockResolvedValue({ data: [] });
//     await getGeneralNews();
//     expect(axios.get).toHaveBeenCalledTimes(1);
//     expect(axios.get).toHaveBeenCalledWith("/news", {
//       params: { category: "general" },
//     });
//   });

//   it("should return articles on success", async () => {
//     const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
//     axios.get.mockResolvedValue({ data: mockArticles });
//     const result = await getGeneralNews();
//     expect(result).toEqual(mockArticles);
//   });

//   it("should log error on failure", async () => {
//     const mockError = new Error("Request failed");
//     axios.get.mockRejectedValue(mockError);
//     console.error = jest.fn(); // Mock console.error method
//     await getGeneralNews();
//     expect(console.error).toHaveBeenCalledTimes(1);
//     expect(console.error).toHaveBeenCalledWith(mockError);
//   });
// });
