import { getAllByText, getByDisplayValue, render } from "@testing-library/react";
import NewsCard from "./NewsCard";

const mockArticle = {
  source: {
    id: "the-verge",
    name: "The Verge",
  },
  author: "Tom Warren",
  title: "Microsoft Security Copilot is a new GPT-4 AI assistant for cybersecurity",
  description:
    "Microsoft is shifting its AI copilot focus toward cybersecurity. Microsoft Security Copilot is designed to help security professionals analyze threats, reverse engineer scripts, and much more.",
  url:
    "https://www.theverge.com/2023/3/28/23659711/microsoft-security-copilot-gpt-4-ai-tool-features",
  urlToImage:
    "https://cdn.vox-cdn.com/thumbor/5X0IGMLrTUsRnyo97W-GRqDZBiA=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24347781/STK095_Microsoft_03.jpg",
  publishedAt: "2023-03-28T15:30:00Z",
  content:
    "Image: The Verge\r\n\n \n\n After announcing an AI-powered Copilot assistant for Office apps, Microsoft is now turning its attention to cybersecurity. Microsoft Security Copilot is a new assistant for cyb… [+5206 chars]",
};

describe("NewsCard", () => {
  test("renders title, image, source, description, and button correctly", () => {
    const { getByText, getByAltText } = render(<NewsCard article={mockArticle} />);
    expect(getByText(mockArticle.title)).toBeInTheDocument();
    expect(getByAltText(mockArticle.title)).toBeInTheDocument();
    expect(getByText(mockArticle.source.name)).toBeInTheDocument();
    expect(getByText("Read More")).toBeInTheDocument();
  });

  test("renders broken newspaper image when urlToImage is not available", () => {
    const { getByAltText } = render(<NewsCard article={{ ...mockArticle, urlToImage: null }} />);
    const image = getByAltText(mockArticle.title);
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("broken-newspapper.png");
  });
});
