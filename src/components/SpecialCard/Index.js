import Card from "react-bootstrap/Card";

function SpecialCard({ url, img, news, author }) {
  return (
    <a
      style={{ width: "23.75rem", height: "21rem", padding: "0px" }}
      href={url}
    >
      <Card>
        <Card.Img
          variant="top"
          src={img}
          style={{ width: "23.75rem", height: "11rem", padding: "0px" }}
        />
        <Card.Body>
          <Card.Text>
            <b>{news}</b>
          </Card.Text>
          <Card.Text className="text-end">{author}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}

export default SpecialCard;
