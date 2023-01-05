import React, { useState, useEffect } from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";
import axios from "axios";

export const TopNews = () => {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    getTopNews();
  }, []);

  const getTopNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=br&apiKey=9440f38accc54afdacaacd4d6c481ebe"
      )
      .then((res) => setTopNews(res.data.articles));
  };

  return (
    <>
      <div
        style={{
          borderTopStyle: "solid",
          borderTopWidth: 4,
          borderTopColor: "#000",
        }}
      >
        <h1>Notícias</h1>
      </div>
      <div className="row d-flex justify-content-between">
        {topNews.slice(9, 13).map((item, key) => (
          <SpecialCard
            key={item.id}
            url={item.url}
            img={item.urlToImage}
            news={item.description}
            author={item.author}
          />
        ))}
      </div>
      <hr />
    </>
  );
};

export default TopNews;
