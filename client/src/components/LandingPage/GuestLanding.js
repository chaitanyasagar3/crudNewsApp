import { React, useEffect, useState } from "react";
import { getGeneralNews } from "../../api/news";
import { Card, Button, Row, Col, Nav } from "react-bootstrap";
import "../../styles/GuestLanding.css";
import brokenNewspaper from "../../assests/broken-newspapper.png";
import { Link, NavLink } from "react-router-dom";

const GuestLanding = () => {
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

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getGeneralNews();
      setArticles(response);
    };
    fetchArticles();
  }, [refresh]);

  const sanitizeDescription = (description) => {
    const stripped = description.replace(/(<([^>]+)>)/gi, "");
    return stripped.length > 150 ? stripped.slice(0, 150) + "..." : stripped;
  };

  // let auth = useAuth();
  return (
    <>
      <div className="guestLanding" data-testid="guest-landing">
        <Nav
          className="centered-tabs"
          variant="tabs"
          defaultActiveKey="/general"
        >
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              to="/general"
            >
              General
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              to="/business"
            >
              Business
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              to="/entertainment"
            >
              Entertainment
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              to="/health"
            >
              Health
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              to="/science"
            >
              Science
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              to="/sports"
            >
              Sports
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link nav-link-custom"
              activeClassName="active"
              to="/technology"
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
              <Card>
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Img
                    variant="top"
                    src={article.urlToImage || brokenNewspaper}
                    alt={article.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = brokenNewspaper;
                    }}
                  />
                  <Card.Subtitle className="mb-2 source">
                    {article.source && article.source.name}
                  </Card.Subtitle>
                  <Card.Text>
                    {sanitizeDescription(article.description)}
                  </Card.Text>
                  <div className="mt-auto">
                    <Button variant="light" href={article.url}>
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default GuestLanding;
