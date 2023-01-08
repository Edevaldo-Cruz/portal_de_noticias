import React from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";
import { useAPI } from "../../hooks/useAPI";
import NewsCard from "../Card/Index";

function Entertainment() {
  const { itens: news } = useAPI(
    "top-headlines?country=br&category=entertainment&apiKey=9440f38accc54afdacaacd4d6c481ebe"
  );
  return (
    <>
      <div
        className="mt-4"
        style={{
          borderTopStyle: "solid",
          borderTopWidth: 4,
          borderTopColor: "#B42D73",
        }}
      >
        <h1 style={{ color: "#B42D73" }}>Entertenimento</h1>
      </div>
      <div className="row d-flex justify-content-between">
        <div
          className="col-3"
          style={{
            width: "30rem",
            height: "23.5rem",
            marginTop: "1rem",
            marginRight: "1.5rem",
          }}
        >
          {news.slice(0, 1).map((item) => (
            <SpecialCard
              url={item.url}
              img={item.urlToImage}
              title={item.title}
              description={item.description}
              author={item.author}
            />
          ))}
        </div>
        <div
          className="col-3"
          style={{
            width: "35rem",
            height: "24rem",
          }}
        >
          {news.slice(13, 16).map((item, key) => (
            <NewsCard
              key={item.url}
              url={item.url}
              image={item.urlToImage}
              title={item.title}
              author={item.author}
            />
          ))}
        </div>
        <div
          className="col-3"
          style={{
            width: "30rem",
            height: "23.5rem",
            marginTop: "1rem",
            marginRight: "1.5rem",
          }}
        >
          {news.slice(1, 2).map((item) => (
            <SpecialCard
              url={item.url}
              img={item.urlToImage}
              title={item.title}
              description={item.description}
              author={item.author}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Entertainment;
