import { Card, Button } from "react-bootstrap";
import brokenNewspaper from "../../assests/broken-newspapper.png";

const NewsCard = ({ article }) => {
  const sanitizeDescription = (description) => {
    const stripped = description.replace(/(<([^>]+)>)/gi, "");
    return stripped.length > 150 ? stripped.slice(0, 150) + "..." : stripped;
  };

  return (
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
        <Card.Text>{sanitizeDescription(article.description)}</Card.Text>
        <div className="mt-auto">
          <Button variant="light" href={article.url}>
            Read More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
