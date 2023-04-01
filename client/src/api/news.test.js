import { getNewsByCategory } from "./your-file-name"; // Replace with the actual file name

describe("getNewsByCategory", () => {
  const category = "general";

  it("should call axios.get with correct params", async () => {
    axios.get.mockResolvedValue({ data: [] });
    await getNewsByCategory(category);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/news", {
      params: { category: category },
    });
  });

  it("should return articles on success", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });
    const result = await getNewsByCategory(category);
    expect(result).toEqual(mockArticles);
  });

  it("should log error on failure", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);
    console.error = jest.fn(); // Mock console.error method
    await getNewsByCategory(category);
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});
