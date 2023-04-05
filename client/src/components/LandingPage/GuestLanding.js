import { React, useEffect, useState } from "react";
import { getNewsByCategory } from "../../api/news";
import NewsCard from "./NewsCard";
import { Card, Button, Row, Col, Nav, Pagination } from "react-bootstrap";
import "../../styles/GuestLanding.css";
import brokenNewspaper from "../../assests/broken-newspapper.png";
import { Link, NavLink } from "react-router-dom";

const GuestLanding = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(9);

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const fetchArticles = async () => {
    const response = await getNewsByCategory(activeCategory);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesForPage = response.slice(startIndex, endIndex);
    setArticles(articlesForPage);
  };

  useEffect(() => {
    fetchArticles();
  }, [activeCategory, refresh, currentPage, articlesPerPage]);

  const sanitizeDescription = (description) => {
    const stripped = description.replace(/(<([^>]+)>)/gi, "");
    return stripped.length > 150 ? stripped.slice(0, 150) + "..." : stripped;
  };

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
    window.scrollTo(0, 0);
  };
  const pageNumbers = [];
  for (let i = 1; i <= 15; i++) {
    pageNumbers.push(i);
  }

  // let auth = useAuth();
  return (
    <>
      <div className="guestLanding" data-testid="guest-landing">
        <Nav
          data-testid="active-category"
          className="centered-tabs"
          variant="tabs"
          defaultActiveKey="/general"
        >
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
              active={activeCategory === "technology" }
              onClick={() => {
                setActiveCategory("technology");
                setCurrentPage(1);
              }}
            >
              Technology
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Card className="shadow-md">
          <Card.Body>
            <Row>
              <Col sm md="auto">
                <Button variant="light" onClick={() => setRefresh(!refresh)}>
                  Refresh
                </Button>
              </Col>
              <Col sm>
                <h1>Welcome Guest!</h1>
              </Col>
              <Col sm md="auto">
                <Link to="/Sign-up">
                  <Button variant="outline-light">Sign Up Here!</Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>

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
        <div className="d-flex justify-content-center my-4">
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
      </div>
    </>
  );
};

export default GuestLanding;
