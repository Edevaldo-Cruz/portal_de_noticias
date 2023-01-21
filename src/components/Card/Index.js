import Card from "react-bootstrap/Card";
import "./Styles.css";

function NewsCard({ url, image, title, author }) {
  return (
    <div className="cardDiv">
      <a className="text-underline-hover styleCard" href={url}>
        <Card className="Regular shadow ">
          <Card.Body className="p-2">
            <div className="row">
              <div className="col-2">
                <Card.Img className="styleImg" src={image} />
              </div>
              <div className="col-10">
                <Card.Title className="fs-6 mb-4 ms-5">{title}</Card.Title>
                <Card.Text className="text-end fw-lighter">{author}</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default NewsCard;
