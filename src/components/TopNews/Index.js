import React, { useState, useEffect } from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";
import NewsCard from "../Card/Index";
import axios from "axios";
import { Card } from "react-bootstrap";

export const TopNews = () => {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    getTopNews();
    console.log(itens);
  }, []);

  const getTopNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=br&apiKey=9440f38accc54afdacaacd4d6c481ebe"
      )
      .then((res) => setItens(res.data.articles));
    console.log(itens);
  };

  return (
    <>
      <div
        style={{
          marginTop: "4rem",
          marginBottom: "1.5rem",
          borderTopStyle: "solid",
          borderTopWidth: 4,
          borderTopColor: "#000",
        }}
      >
        <h1>Notícias</h1>
      </div>
      <div className="row d-flex justify-content-between">
        <div
          className="col-6"
          style={{
            width: "20rem",
            height: "24rem",
            marginTop: "1rem",
          }}
        >
          <a href={itens[10].url}>
            <Card>
              <Card.Img
                src={itens[10].urlToImage}
                style={{
                  width: "22rem",
                  height: "24rem",
                }}
              />
              <Card.ImgOverlay className="d-flex align-items-end">
                <div style={{ backgroundColor: "rgba(52, 52, 52, 0.7)" }}>
                  <Card.Title style={{ color: "white" }}>
                    {itens[10].title}
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    {itens[10].description}
                  </Card.Text>
                  <Card.Text style={{ color: "white" }}>
                    {itens[10].author}
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </a>
        </div>

        <div className="col-3 ms-5">
          <NewsCard
            url={itens[11].url}
            image={itens[11].urlToImage}
            title={itens[11].title}
            author={itens[11].author}
          />
          <NewsCard
            url={itens[12].url}
            image={itens[12].urlToImage}
            title={itens[12].title}
            author={itens[12].author}
          />
          <NewsCard
            url={itens[13].url}
            image={itens[13].urlToImage}
            title={itens[13].title}
            author={itens[13].author}
          />
        </div>
        <div className="col-3">
          <NewsCard
            url={itens[14].url}
            image={itens[14].urlToImage}
            title={itens[14].title}
            author={itens[14].author}
          />
          <NewsCard
            url={itens[15].url}
            image={itens[15].urlToImage}
            title={itens[15].title}
            author={itens[15].author}
          />
          <NewsCard
            url={itens[16].url}
            image={itens[16].urlToImage}
            title={itens[16].title}
            author={itens[16].author}
          />
        </div>
        <div className="col-3">
          <NewsCard
            url={itens[17].url}
            image={itens[17].urlToImage}
            title={itens[17].title}
            author={itens[17].author}
          />
          <NewsCard
            url={itens[18].url}
            image={itens[18].urlToImage}
            title={itens[18].title}
            author={itens[18].author}
          />
          <NewsCard
            url={itens[19].url}
            image={itens[19].urlToImage}
            title={itens[19].title}
            author={itens[19].author}
          />
        </div>
      </div>
    </>
  );
};

export default TopNews;
