import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Index";
import NewsCarousel from "../components/Carousel/Index";
import BigCard from "../components/BigCard/Index";
import NewsCard from "../components/Card/Index";
import axios from "axios";
import { Container } from "react-bootstrap";

export const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=br&apiKey=9440f38accc54afdacaacd4d6c481ebe"
      )
      .then(
        (res) => setNews(res.data.articles).catch((err) => console.log(err)) //verificar o catch
      );

    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    //   .then((res) =>
    //     setNews(res.data.results).catch((err) => console.log(err))
    //   );
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="row" style={{ marginTop: "2rem" }}>
          <NewsCarousel />
          <BigCard />
          <BigCard />
          <div style={{ marginTop: "0.5rem" }}>
            <div className="row">
              {news.map((item, key) => (
                <div className="col-3">
                  <NewsCard
                    key={key}
                    url={item.url}
                    image={item.urlToImage}
                    title={item.title}
                    author={item.author}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      ;
    </>
  );
};
