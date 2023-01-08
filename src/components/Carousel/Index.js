import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

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
        "https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=9440f38accc54afdacaacd4d6c481ebe"
      )
      .then((result) => setNewCarousel(result.data.articles));
  };

  return (
    <div className="col-6 ">
      <div
        style={{
          width: "50rem",
          height: "23.25rem",
          backgroundColor: "black",
          opacity: "0.9",
        }}
      >
        <Carousel
          className="shadow "
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            height: "23.25rem",
          }}
        >
          {newsCarousel.map((item, key) => (
            <Carousel.Item key={key}>
              <a href={item.url}>
                <img
                  className="d-block w-100"
                  src={item.urlToImage}
                  alt=""
                  style={{ height: "23.25rem" }}
                />
                <Carousel.Caption>
                  <div
                    style={{
                      backgroundColor: "rgba(52, 52, 52, 0.9)",
                    }}
                  >
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
