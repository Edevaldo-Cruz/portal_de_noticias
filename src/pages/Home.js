import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Index";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import NewsCarousel from "../components/Carousel/Index";
import BigCard from "../components/BigCard/Index";
import NewsCard from "../components/Card/Index";
import TopNews from "../components/TopNews/Index";
import Entertainment from "../components/Entertainment/Index";
import Technology from "../components/Technology/Index";
import { useAPI } from "../hooks/useAPI";
import Sports from "../components/Sports/Index";
import Button from "react-bootstrap/Button";
import axios from "axios";
import LinkCarousel from "../components/LinkCarousel/Index";

import "./Style.css";
import Advertising from "../components/Advertising/Index";

export const Home = () => {
  const { itens: news } = useAPI(
    "top-headlines?country=br&apiKey=9440f38accc54afdacaacd4d6c481ebe"
  );

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
        <Advertising />
        <LinkCarousel />
        <div>
          <hr />
          <ul className="d-flex justify-content-between">
            <Nav.Link className="teste" onClick={handleShow}>
              {weather.slice(0, 1).map((item, key) => (
                <b key={key}>
                  {item.name} / {item.main.temp}º
                </b>
              ))}
            </Nav.Link>
            <Nav.Link href="https://www.msn.com/pt-br/noticias?cvid=cb933c86e219409497b26580606ba535">
              <b>NOTÍCIAS</b>
            </Nav.Link>
            <Nav.Link
              className="link enterteinment"
              href="https://www.msn.com/pt-br/entretenimento?cvid=cb933c86e219409497b26580606ba535"
            >
              <b>ENTRETENIMENTO</b>
            </Nav.Link>
            <Nav.Link
              className="link sport"
              href="https://www.msn.com/pt-br/esportes?cvid=cb933c86e219409497b26580606ba535"
            >
              <b>ESPORTES</b>
            </Nav.Link>
            <Nav.Link
              className="link lifeStyle"
              href="https://www.msn.com/pt-br/estilo-de-vida?cvid=cb933c86e219409497b26580606ba535"
            >
              <b>ESTILO DE VIDA</b>
            </Nav.Link>
            <Nav.Link
              className="link pattern"
              href="https://www.msn.com/pt-br/estilo-de-vida/horoscopo?cvid=cb933c86e219409497b26580606ba535"
            >
              <b>HORÓSCOPO</b>
            </Nav.Link>
            <Nav.Link
              className="link cash"
              href="https://www.msn.com/pt-br/dinheiro?cvid=cb933c86e219409497b26580606ba535"
            >
              <b>DINHEIRO</b>
            </Nav.Link>
            <Nav.Link
              className="link recipe"
              href="https://www.msn.com/pt-br/receitasebebidas?cvid=cb933c86e219409497b26580606ba535"
            >
              <b>RECEITAS</b>
            </Nav.Link>
            <Nav.Link
              className="link pattern"
              href="https://start.gg/discover?locale=pt-br&ocid=essports"
            >
              <b>ESPORTS</b>
            </Nav.Link>
            <Nav.Link
              className="link car"
              href="https://www.msn.com/pt-br/carros?cvid=cb933c86e219409497b26580606ba535"
            >
              <b>CARROS</b>
            </Nav.Link>
            <Nav.Link
              className="link pattern"
              href="https://www.msn.com/pt-br/tv?cvid=cb933c86e219409497b26580606ba535"
            >
              <b>TV</b>
            </Nav.Link>
            <Nav.Link
              className="link pattern"
              href="https://www.msn.com/pt-br/clima?cvid=cb933c86e219409497b26580606ba535"
            >
              <b>TEMPO</b>
            </Nav.Link>
          </ul>
        </div>
        <div className="row" style={{ marginTop: "2rem" }}>
          <NewsCarousel />
          <BigCard />
          <BigCard />
          <div style={{ marginTop: "0.5rem" }}>
            <div className="row">
              {news.slice(1, 9).map((item, key) => (
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
            <Technology />
          </div>
        </div>
      </div>
      {weather.map((item, key) => (
        <Modal key={key} show={show} onHide={handleClose}>
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
