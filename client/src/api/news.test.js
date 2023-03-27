import { getGeneralNews } from "./news";
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
