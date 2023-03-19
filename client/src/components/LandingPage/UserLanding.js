import { React, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getGeneralNews } from "../../api/news";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../styles/UserLanding.css";

const UserLanding = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getGeneralNews();
      setArticles(response);
    };
    fetchArticles();
  }, []);

  const sanitizeDescription = (description) => {
    const stripped = description.replace(/(<([^>]+)>)/gi, "");
    return stripped.length > 150 ? stripped.slice(0, 150) + "..." : stripped;
  };

  let auth = useAuth();
  return (
    <>
      <div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {articles.map((article) => (
            <Col key={article.title}>
              <Card>      
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Img variant="top" src={article.urlToImage} />
                  <Card.Subtitle className="mb-2 text-muted">
                    {article.source.name}
                  </Card.Subtitle>
                  <Card.Text>
                    {sanitizeDescription(article.description)}
                  </Card.Text>
                  <Button variant="light" href={article.url}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default UserLanding;
