import { React, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getNewsByCategory } from "../../api/news";
import NewsCard from "./NewsCard";
import { Card, Button, Row, Col, Nav,Pagination } from "react-bootstrap";
import "../../styles/UserLanding.css";
import brokenNewspaper from "../../assests/broken-newspapper.png";
import SettingsModal from "../Settings/SettingsModal";
import { updatePreferences } from "../../api/auth";
import { Link, NavLink } from "react-router-dom";

const UserLanding = () => {
  const auth = useAuth();
  const [activeCategory, setActiveCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
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
  const handleSettingsSubmit = async (categories) => {
    try {
      console.log(auth.user);
      const response = await updatePreferences(auth.user._id, categories);
      const { preferences } = response;
      auth.updatePreferences(preferences);
    } catch (error) {
      console.log(error);
    }
    setShowSettings(false);
  };

  const handleSettingsCancel = () => {
    setShowSettings(false);
  };

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
    window.scrollTo(0, 0);
  }
  const pageNumbers = [];
  for (let i = 1; i <= 15; i++) {
    pageNumbers.push(i);
  }


  return (
    <>
      <div className="userLanding" data-testid="user-landing">
        <Nav
          className="centered-tabs"
          variant="tabs"
          defaultActiveKey="/general"
        >
          <Nav.Item data-testid="nav-item">
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => {setActiveCategory("general");
              setCurrentPage(1);}}
            >
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => {setActiveCategory("general");
              setCurrentPage(1);}}
            >
              General
            </NavLink>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => {setActiveCategory("business");
              setCurrentPage(1);}}
            >
              Business
            </NavLink>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => {setActiveCategory("entertainment");
              setCurrentPage(1);}}
            >
              Entertainment
            </NavLink>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => {setActiveCategory("health");
              setCurrentPage(1);}}
            >
              Health
            </NavLink>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => {setActiveCategory("science");
              setCurrentPage(1);}}
            >
              Science
            </NavLink>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => {setActiveCategory("sports");
              setCurrentPage(1);}}
            >
              Sports
            </NavLink>
          </Nav.Item>
          <Nav.Item data-testid="nav-item">
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => {setActiveCategory("technology");
              setCurrentPage(1);}}
            >
              Technology
            </NavLink>
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
                <h1>Welcome {auth.user.username}!</h1>
              </Col>
              <Col sm md="auto">
                <Button
                  className="settings-button"
                  variant="outline-light"
                  onClick={() => setShowSettings(true)}
                >
                  Settings
                </Button>
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
      </div>
      <SettingsModal
        show={showSettings}
        onHide={handleSettingsCancel}
        onSubmit={handleSettingsSubmit}
      />
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
    </>
  );
};

export default UserLanding;
