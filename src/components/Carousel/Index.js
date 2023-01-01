import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function NewsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="col-6">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{
          // width: "40rem",
          height: "23.25rem",
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.wired.com/photos/618c00da12143eb34d938e26/191:100/w_2580,c_limit/Gear-Beats-Fit-Pro-top.jpg"
            alt="First slide"
            style={{ height: "23.25rem" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.wired.com/photos/639b782520642730f95ffa01/191:100/w_1280,c_limit/YearEndReview_YubiKey.jpg"
            alt="Second slide"
            style={{ height: "23.25rem" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.reuters.com/resizer/8W6qqbXNR3Q0EGM-41o9ih0cOyU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NYISRS2ZHVKZPB4H3HKELLVKK4.jpg"
            alt="Third slide"
            style={{ height: "23.25rem" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default NewsCarousel;
