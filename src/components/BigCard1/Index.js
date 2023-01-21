import Card from "react-bootstrap/Card";
import NewsCard from "../Card/Index";
import { useAPI } from "../../hooks/useAPI";

function BigCard1() {
  const { itens: news } = useAPI(
    "top-headlines?country=br&apiKey=9440f38accc54afdacaacd4d6c481ebe"
  );

  return (
    <div
      className="col-3 row d-flex justify-content-center"
      style={{
        marginLeft: "0.5rem",
      }}
    >
      {news.slice(9, 10).map((item) => (
        <Card
          key={item.url}
          className="text-white"
          style={{
            width: "23rem",
            height: "15rem",
          }}
        >
          <Card.Img
            src={item.urlToImage}
            style={{
              width: "23rem",
              height: "15rem",
              marginLeft: "-15px",
              padding: "0px",
            }}
          />
          <Card.ImgOverlay className="d-flex align-items-end">
            <div
              style={{
                backgroundColor: "rgba(52, 52, 52, 0.7)",
                width: "23rem",
              }}
            >
              <Card.Text>{item.title}</Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      ))}

      {news.slice(10, 11).map((item) => (
        <NewsCard
          key={item.url}
          url={item.url}
          image={item.urlToImage}
          title={item.title}
          author={item.author}
        />
      ))}
    </div>
  );
}

export default BigCard1;
