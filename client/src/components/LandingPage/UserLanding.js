import { React, useEffect, useState, useCallback } from "react";
import useAuth from "../../hooks/useAuth";
import { getNewsByCategory } from "../../api/news";
import { getNewsByUserPreferences } from "../../api/news";
import { getNewsBySearch } from "../../api/news";
import NewsCard from "./NewsCard";
import {
  Card,
  Form,
  Row,
  Col,
  Nav,
  Pagination,
  Button,
  FormControl,
  Stack,
} from "react-bootstrap";
import "../../styles/UserLanding.css";
import brokenNewspaper from "../../assests/broken-newspapper.png";

const articlesPerPage = 9;
const UserLanding = () => {
  const auth = useAuth();
  const [activeCategory, setActiveCategory] = useState("home");
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const fetchArticles = useCallback(
    async (search, page, category) => {
      try {
        let response;
        setLoading(true);
        if (search) {
          setArticles([]);
          response = await getNewsBySearch(search);
        }
        if (!search && category === "home") {
          response = await getNewsByUserPreferences(auth.user);
          
        } else if (!search && category !== "home") {
          response = await getNewsByCategory(category);
        }
        const startIndex = (page - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const articlesForPage = response.slice(startIndex, endIndex);
        setArticles(articlesForPage);
        setPageCount(Math.ceil(response.length / articlesPerPage));
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchArticles(searchQuery, currentPage, activeCategory);
  }, [fetchArticles, searchQuery, currentPage, activeCategory]);

  useEffect(() => {
    const onRefresh = async () => {
      if (auth.refreshArticles) {
        setSearchQuery("");
        setActiveCategory("home");
        setCurrentPage(1);
        await fetchArticles("", 1, "home");
        auth.setRefreshArticles(false);
      }
    };
    onRefresh();
  }, [
    auth.refreshArticles,
    fetchArticles,
    auth.setRefreshArticles,
    auth,
    searchQuery,
    currentPage,
    activeCategory,
  ]);
  const sanitizeDescription = (description) => {
    const stripped = description.replace(/(<([^>]+)>)/gi, "");
    return stripped.length > 150 ? stripped.slice(0, 150) + "..." : stripped;
  };

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
    window.scrollTo(0, 0);
  };
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }
  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      if (searchInput) {
        setSearchQuery(searchInput);
        setCurrentPage(1);
      } else {
        window.alert("Please enter a search query");
      }
    }
    catch (error) {
      if (error.response && error.response.status === 401) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="userLanding" data-testid="user-landing">
        <Nav className="centered-tabs" variant="tabs" activeKey="home">
          <Nav.Item data-testid="nav-item">
            <Nav.Link
              className="nav-link nav-link-custom"
              active={activeCategory === "home"}
              onClick={() => {
                setActiveCategory("home");
                setCurrentPage(1);
                setSearchQuery("");
              }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <Nav.Link
              className="nav-link nav-link-custom"
              active={activeCategory === "general"}
              onClick={() => {
                setActiveCategory("general");
                setCurrentPage(1);
                setSearchQuery("");
              }}
            >
              General
            </Nav.Link>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <Nav.Link
              className="nav-link nav-link-custom"
              active={activeCategory === "business"}
              onClick={() => {
                setActiveCategory("business");
                setCurrentPage(1);
                setSearchQuery("");
              }}
            >
              Business
            </Nav.Link>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <Nav.Link
              className="nav-link nav-link-custom"
              active={activeCategory === "entertainment"}
              onClick={() => {
                setActiveCategory("entertainment");
                setCurrentPage(1);
                setSearchQuery("");
              }}
            >
              Entertainment
            </Nav.Link>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <Nav.Link
              className="nav-link nav-link-custom"
              active={activeCategory === "health"}
              onClick={() => {
                setActiveCategory("health");
                setCurrentPage(1);
                setSearchQuery("");
              }}
            >
              Health
            </Nav.Link>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <Nav.Link
              className="nav-link nav-link-custom"
              active={activeCategory === "science"}
              onClick={() => {
                setActiveCategory("science");
                setCurrentPage(1);
                setSearchQuery("");
              }}
            >
              Science
            </Nav.Link>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <Nav.Link
              className="nav-link nav-link-custom"
              active={activeCategory === "sports"}
              onClick={() => {
                setActiveCategory("sports");
                setCurrentPage(1);
                setSearchQuery("");
              }}
            >
              Sports
            </Nav.Link>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <Nav.Link
              className="nav-link nav-link-custom"
              active={activeCategory === "technology"}
              onClick={() => {
                setActiveCategory("technology");
                setCurrentPage(1);
                setSearchQuery("");
              }}
            >
              Technology
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Form data-testid="search-form" onSubmit={handleSearch} style={{ paddingBottom: "20px" }}>
          <Stack direction="horizontal" gap={2}>
            <FormControl
              data-testid="search"
              type="text"
              placeholder="Search for news"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onBlur={(e) => {
                setSearchInput(e.target.value.trim());
              }
              }
            />
            <Button type="submit" data-testid="search-button">
              Search
            </Button>
          </Stack>
        </Form>
        {loading ? (
          <p>Loading...</p>
        ) : articles && articles.length === 0 ? (
          <div style={{ alignItems: "center", backgroundSize: "cover" }}>
            <Card style={{ alignItems: "center" }}>
              <Card.Body>
                <Card.Title>No articles found</Card.Title>
                <Card.Text>
                  Try searching for something else or try again later.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {articles?.map((article) => (
              <Col key={article.title}>
                <NewsCard
                  key={article.title}
                  article={article}
                  brokenNewspaper={brokenNewspaper}
                  sanitizeDescription={sanitizeDescription}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>

      <div className="my-pagination">
        <Pagination>
          {currentPage > 1 && (
            <Pagination.Prev
              key="prev"
              onClick={() => paginate(currentPage - 1)}
            />
          )}
          {pageNumbers.map((number) => {
            if (
              number === 1 ||
              number === pageNumbers.length ||
              (number >= currentPage - 10 && number <= currentPage + 10)
            ) {
              return (
                <Pagination.Item
                  key={number}
                  active={number === currentPage}
                  onClick={() => paginate(number)}
                >
                  {number}
                </Pagination.Item>
              );
            } else {
              return null;
            }
          })}
          {currentPage < pageNumbers.length && (
            <Pagination.Next
              key="next"
              onClick={() => paginate(currentPage + 1)}
            />
          )}
        </Pagination>
      </div>
    </>
  );
};

export default UserLanding;
