import React from "react";
import SpecialCard from "../SpecialCard/Index";
import { useAPI } from "../../hooks/useAPI";

function Technology() {
  const { itens: news } = useAPI(
    "top-headlines?country=br&category=technology&apiKey=9440f38accc54afdacaacd4d6c481ebe"
  );

  return (
    <>
      <div
        className="mt-4"
        style={{
          borderTopStyle: "solid",
          borderTopWidth: 4,
          borderTopColor: "#000",
        }}
      >
        <h1>Tecnologia</h1>
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
        <div
          className="col-3"
          style={{
            width: "30rem",
            height: "23.5rem",
            marginTop: "1rem",
            marginRight: "1.5rem",
          }}
        >
          {news.slice(2, 3).map((item) => (
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
            width: "30rem",
            height: "23.5rem",
            marginTop: "1rem",
            marginRight: "1.5rem",
          }}
        >
          {news.slice(3, 4).map((item) => (
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

export default Technology;
