import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import NewsCard from "../Card/Index";
import ContentContainerCard from "../ContentContainerCard/Index";

function ContainerCard({ propsUrl, propsImage, propsTitle, propsAuthor }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=br&apiKey=9440f38accc54afdacaacd4d6c481ebe"
      )
      .then((res) => setContent(res.data.articles));
  };
  return (
    <Card style={{ width: "23.75rem", height: "21rem", padding: "0px" }}>
      <ListGroup variant="top">
        <div className="row">
          <ContentContainerCard
            url={propsUrl}
            image={propsImage}
            title={propsTitle}
            author={propsAuthor}
          />
        </div>
      </ListGroup>
    </Card>
  );
}

export default ContainerCard;
