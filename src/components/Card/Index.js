import Card from "react-bootstrap/Card";

function NewsCard({ url, image, title, author }) {
  return (
    <div
      style={{
        padding: "0px",
        marginTop: "1rem",
      }}
    >
      <a
        className="text-underline-hover"
        href={url}
        style={{
          width: "30rem",
          height: "7.5rem",
          textDecoration: "none",
          color: "black",
        }}
      >
        <Card>
          <Card.Body className="p-2">
            <div className="row">
              <div className="col-2">
                <Card.Img
                  src={image}
                  style={{
                    width: "6rem",
                    height: "6rem",
                    margin: "0rem",
                  }}
                />
              </div>
              <div className="col-10">
                <Card.Title
                  className="fs-6 ms"
                  style={{ marginLeft: "3.2rem" }}
                >
                  {title}
                </Card.Title>
                <Card.Text className="text-end align-text-bottom">
                  {author}
                </Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default NewsCard;
