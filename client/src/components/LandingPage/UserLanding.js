import { React, useEffect, useState, useCallback } from "react";
import useAuth from "../../hooks/useAuth";
import { getNewsByCategory } from "../../api/news";
import { getNewsByUserPreferences } from "../../api/news";
import NewsCard from "./NewsCard";
import { Card, Row, Col, Nav, Pagination } from "react-bootstrap";
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

  const categories = [
    "home",
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const fetchArticles = useCallback(async () => {
    try {
      if (auth.user && activeCategory === "home") {
        const response = await getNewsByUserPreferences(auth.user);
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const articlesForPage = response.slice(startIndex, endIndex);
        setArticles(articlesForPage);
        setPageCount(Math.ceil(response.length / articlesPerPage));
      } else {
        const response = await getNewsByCategory(activeCategory);
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const articlesForPage = response.slice(startIndex, endIndex);
        setArticles(articlesForPage);
        setPageCount(Math.ceil(response.length / articlesPerPage));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [activeCategory, currentPage, auth.user]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  useEffect(() => {
    const onRefresh = async () => {
      if (auth.refreshArticles) {
        await fetchArticles();
        auth.setRefreshArticles(false);
      }
    };
    onRefresh();
  }, [auth.refreshArticles, fetchArticles, auth.setRefreshArticles]);

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
              }}
            >
              Technology
            </Nav.Link>
          </Nav.Item>
        </Nav>
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
      </div>

      <div className="my-pagination">
        <Pagination>
          {currentPage > 1 && (
            <Pagination.Ellipsis key="first" onClick={() => paginate(1)} />
          )}
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
              (number >= currentPage - 1 && number <= currentPage + 1)
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
          {currentPage < pageNumbers.length - 1 && (
            <Pagination.Next
              key="next"
              onClick={() => paginate(currentPage + 1)}
            />
          )}
          {currentPage < pageNumbers.length - 2 && (
            <Pagination.Ellipsis
              key="last"
              onClick={() => paginate(pageNumbers.length)}
            />
          )}
        </Pagination>
      </div>
    </>
  );
};

export default UserLanding;
