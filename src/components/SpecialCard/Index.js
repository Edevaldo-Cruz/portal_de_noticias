import Card from "react-bootstrap/Card";

function SpecialCard({ url, img, title, description, author }) {
  return (
    <a href={url} key={url}>
      <Card>
        <Card.Img
          src={img}
          style={{
            width: "30rem",
            height: "23.5rem",
          }}
        />
        <Card.ImgOverlay className="d-flex align-items-end">
          <div
            style={{
              backgroundColor: "rgba(52, 52, 52, 0.7)",
              width: "20rem",
            }}
          >
            <Card.Title style={{ color: "white" }}>{title}</Card.Title>
            <Card.Text style={{ color: "white" }}>{description}</Card.Text>
            <Card.Text style={{ color: "white" }}>{author}</Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </a>
  );
}

export default SpecialCard;
