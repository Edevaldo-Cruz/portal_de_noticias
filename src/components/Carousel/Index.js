import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import "./Styles.css";

function NewsCarousel() {
  const [index, setIndex] = useState(0);
  const [newsCarousel, setNewCarousel] = useState([]);

  useEffect(() => {
    getNewsCarousel();
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const getNewsCarousel = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=" +
          process.env.REACT_APP_API_NEWS
      )
      .then((result) => setNewCarousel(result.data.articles));
  };

  return (
    <div className="col-6">
      <div className="divCarousel">
        <Carousel
          className="shadow heightCarousel"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {newsCarousel.map((item, key) => (
            <Carousel.Item key={key}>
              <a href={item.url}>
                <img
                  className="d-block w-100 heightImg"
                  src={item.urlToImage}
                  alt=""
                />
                <Carousel.Caption>
                  <div className="divSubtitle">
                    <h3>{item.title}</h3>
                  </div>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default NewsCarousel;
