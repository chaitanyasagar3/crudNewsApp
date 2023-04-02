import { React, useEffect, useState } from "react";
import { getNewsByCategory } from "../../api/news";
import NewsCard from "./NewsCard";
import { Card, Button, Row, Col, Nav } from "react-bootstrap";
import "../../styles/GuestLanding.css";
import brokenNewspaper from "../../assests/broken-newspapper.png";
import { Link, NavLink } from "react-router-dom";

const GuestLanding = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [refresh, setRefresh] = useState(false);
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
    setArticles(response);
  };

  useEffect(() => {
    fetchArticles();
  }, [activeCategory, refresh]);

  const sanitizeDescription = (description) => {
    const stripped = description.replace(/(<([^>]+)>)/gi, "");
    return stripped.length > 150 ? stripped.slice(0, 150) + "..." : stripped;
  };

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
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => setActiveCategory("general")}
            >
              General
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => setActiveCategory("business")}
            >
              Business
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => setActiveCategory("entertainment")}
            >
              Entertainment
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => setActiveCategory("health")}
            >
              Health
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => setActiveCategory("science")}
            >
              Science
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => setActiveCategory("sports")}
            >
              Sports
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              onClick={() => setActiveCategory("technology")}
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
      </div>
    </>
  );
};

export default GuestLanding;
