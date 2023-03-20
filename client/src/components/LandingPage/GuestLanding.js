import { React, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getGeneralNews } from "../../api/news";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../styles/GuestLanding.css";
import brokenNewspaper from "../../assests/broken-newspapper.png";
import { Link } from "react-router-dom";

const GuestLanding = () => {
  const [articles, setArticles] = useState([]);
  const [refresh, setRefresh] = useState(false);
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

  let auth = useAuth();
  return (
    <>
      <div className="guestLanding">
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
          {articles.map((article) => (
            <Col key={article.title}>
              <Card>
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Img
                    variant="top"
                    src={article.urlToImage || brokenNewspaper}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = brokenNewspaper;
                    }}
                  />
                  <Card.Subtitle className="mb-2 source">
                    {article.source.name}
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
