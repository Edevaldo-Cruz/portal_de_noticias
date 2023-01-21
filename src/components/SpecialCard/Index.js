import Card from "react-bootstrap/Card";
import "./Styles.css";

function SpecialCard({ url, img, title, description, author }) {
  return (
    <a href={url}>
      <Card>
        <Card.Img className="sizeImg" src={img} />
        <Card.ImgOverlay className="d-flex align-items-end">
          <div className="subtitle">
            <Card.Title className="white">{title}</Card.Title>
            <Card.Text className="white">{description}</Card.Text>
            <Card.Text className="white">{author}</Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </a>
  );
}

export default SpecialCard;
