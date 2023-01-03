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
        "https://newsapi.org/v2/top-headlines?sources=globo&apiKey=9440f38accc54afdacaacd4d6c481ebe"
      )
      .then((result) =>
        setNewCarousel(result.data.articles).catch((err) => console.log(err))
      );
  };

  return (
    <div className="col-6">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{
          height: "23.25rem",
        }}
      >
        {newsCarousel.map((item, key) => (
          <Carousel.Item key={key}>
            <img
              className="d-block w-100"
              src={item.urlToImage}
              alt=""
              style={{ height: "23.25rem" }}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default NewsCarousel;
