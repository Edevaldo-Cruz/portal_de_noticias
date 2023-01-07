import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Index";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import NewsCarousel from "../components/Carousel/Index";
import BigCard from "../components/BigCard/Index";
import NewsCard from "../components/Card/Index";
import TopNews from "../components/TopNews/Index";
import Entertainment from "../components/Entertainment/Index";
import Offers from "../components/Offers/Index";
import Popular from "../components/Popular/Index";
import { useAPI } from "../hooks/useAPI";
import Sports from "../components/Sports/Index";
import Button from "react-bootstrap/Button";
import axios from "axios";

export const Home = () => {
  const { itens: news } = useAPI("apiKey=9440f38accc54afdacaacd4d6c481ebe");

  const [location, setLocation] = useState(false);
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState([]);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  var itemNews = [];

  let getWeather = async (lat, long) => {
    let res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    );
    itemNews.push(res.data);
    setWeather(itemNews);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "1600px", alignItems: "center", margin: "auto" }}>
        <div>
          <ul className="d-flex justify-content-between">
            <Nav.Link className="teste" onClick={handleShow}>
              {weather.map((item, key) => (
                <b>
                  {item.name}/ {item.main.temp}º |
                </b>
              ))}
            </Nav.Link>
            <Nav.Link href="https://www.msn.com/pt-br/noticias/brasil?cvid=575e8a2410d742b6942d94d7073cf5f3">
              <b>BRASIL</b>
            </Nav.Link>
            <Nav.Link href="https://www.msn.com/pt-br/noticias/mundo?cvid=575e8a2410d742b6942d94d7073cf5f3">
              <b>MUNDO</b>
            </Nav.Link>
            <Nav.Link href="https://www.msn.com/pt-br/noticias/covid?cvid=575e8a2410d742b6942d94d7073cf5f3">
              <b>CORONAVÍRUS</b>
            </Nav.Link>
            <Nav.Link href="https://www.msn.com/pt-br/clima/?cvid=575e8a2410d742b6942d94d7073cf5f3">
              <b>TEMPO</b>
            </Nav.Link>
            <Nav.Link href="https://www.msn.com/pt-br/noticias/ciencia?cvid=575e8a2410d742b6942d94d7073cf5f3">
              <b>CIÊNCIAS</b>
            </Nav.Link>
            <Nav.Link href="https://www.msn.com/pt-br/noticias/tecnologia?cvid=575e8a2410d742b6942d94d7073cf5f3">
              <b>TECNOLOGIA</b>
            </Nav.Link>
            <Nav.Link href="https://www.msn.com/pt-br/noticias/educacao?cvid=575e8a2410d742b6942d94d7073cf5f3">
              <b>EDUCAÇÃO</b>
            </Nav.Link>
            <Nav.Link href="https://www.msn.com/pt-br/noticias/meio-ambiente?cvid=575e8a2410d742b6942d94d7073cf5f3">
              <b>MEIO AMBIENTE</b>
            </Nav.Link>
            <Nav.Link href="https://www.msn.com/pt-br/noticias/loterias?cvid=575e8a2410d742b6942d94d7073cf5f3">
              <b>LOTERIAS</b>
            </Nav.Link>
          </ul>
        </div>
        <div className="row" style={{ marginTop: "2rem" }}>
          <NewsCarousel />
          <BigCard />
          <BigCard />
          <div style={{ marginTop: "0.5rem" }}>
            <div className="row">
              {news.slice(0, 8).map((item, key) => (
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
            <TopNews />
            <Sports />
            <Entertainment />
            <Offers />
            <Popular />
          </div>
        </div>
      </div>
      {weather.map((item, key) => (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            closeButton
            style={{ backgroundColor: "#ccc" }}
          ></Modal.Header>
          <Modal.Body style={{ backgroundColor: "#ccc" }}>
            <h3>CLIMA ATUAL</h3>
            <p>18:51</p>
            <h1>{item.main.temp}°</h1>
            <p>{item.weather[0].description}</p>
            <p>SENSAÇÃO TÉRMICA: {item.main.feels_like}°</p>
            <p>A máxima será de {item.main.temp_max}</p>
            <p>Umidade: {item.main.humidity}</p>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#ccc" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
      );
    </>
  );
};
