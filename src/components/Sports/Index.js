import React from "react";
import SpecialCard from "../SpecialCard/Index";
import { useAPI } from "../../hooks/useAPI";
import NewsCard from "../Card/Index";
import Nav from "react-bootstrap/Nav";
import { FaChevronRight } from "react-icons/fa";

import "./Styles.css";

function Sports() {
  const { itens: news } = useAPI(
    "top-headlines?country=br&category=sports&apiKey=9440f38accc54afdacaacd4d6c481ebe"
  );

  return (
    <>
      <div className="lineSport">
        <ul className="d-flex justify-content-start center">
          <Nav.Link
            className="me-4"
            href="https://www.msn.com/pt-br/esportes?cvid=4cbdda808867443192368eec3dcd5bd7"
          >
            <h1 style={{ color: "#1250A1" }}>
              Esporte <FaChevronRight size={"25px"} />
            </h1>
          </Nav.Link>
          <Nav.Link
            className="link sport mr-4 me-4"
            href="https://www.msn.com/pt-br/esportes/futebol?cvid=4cbdda808867443192368eec3dcd5bd7"
          >
            <b>FUTEBOL</b>
          </Nav.Link>
          <Nav.Link
            className="link sport me-4"
            href="https://www.msn.com/pt-br/esportes/volei?cvid=4cbdda808867443192368eec3dcd5bd7"
          >
            <b>VÔLEI</b>
          </Nav.Link>
          <Nav.Link
            className="link sport  me-4"
            href="https://www.msn.com/pt-br/esportes/automobilismo?cvid=4cbdda808867443192368eec3dcd5bd7"
          >
            <b>AUTOMOBILISMO</b>
          </Nav.Link>
          <Nav.Link
            className="link sport  me-4"
            href="https://www.msn.com/pt-br/esportes/automobilismo?cvid=4cbdda808867443192368eec3dcd5bd7"
          >
            <b>LUTAS</b>
          </Nav.Link>
          <Nav.Link
            className="link sport  me-4"
            href="https://www.msn.com/pt-br/esportes/basquete?cvid=4cbdda808867443192368eec3dcd5bd7"
          >
            <b>BASQUETE</b>
          </Nav.Link>
          <Nav.Link
            className="link sport  me-4"
            href="https://www.msn.com/pt-br/esportes/tenis?cvid=fbf61d54420244e2a9ecf5d4e9b7a965"
          >
            <b>TÊNIS</b>
          </Nav.Link>
          <Nav.Link
            className="link sport  me-4"
            href="https://start.gg/discover?locale=pt-br&ocid=essports"
          >
            <b>ESPORTS</b>
          </Nav.Link>
          <Nav.Link
            className="link sport me-4"
            href="https://www.msn.com/pt-br/esportes/surfe?cvid=fbf61d54420244e2a9ecf5d4e9b7a965"
          >
            <b>SURFE</b>
          </Nav.Link>
          <Nav.Link
            className="link sport me-4"
            href="https://www.msn.com/pt-br/esportes/video?cvid=fbf61d54420244e2a9ecf5d4e9b7a965"
          >
            <b>VÍDEO</b>
          </Nav.Link>
        </ul>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-3 divNews">
          {news.slice(0, 1).map((item) => (
            <SpecialCard
              key={item.url}
              url={item.url}
              img={item.urlToImage}
              title={item.title}
              description={
                item.description.length > 75
                  ? item.description.substring(0, 75) + "..."
                  : item.description
              }
              author={item.author}
            />
          ))}
        </div>
        <div className="col-3 divNews">
          {news.slice(1, 2).map((item) => (
            <SpecialCard
              key={item.url}
              url={item.url}
              img={item.urlToImage}
              title={item.title}
              description={
                item.description.length > 75
                  ? item.description.substring(0, 75) + "..."
                  : item.description
              }
              author={item.author}
            />
          ))}
        </div>
        <div className="col-3 divCard">
          {news.slice(13, 16).map((item, key) => (
            <NewsCard
              key={item.url}
              url={item.url}
              image={item.urlToImage}
              title={
                item.title.length > 75
                  ? item.title.substring(0, 75) + "..."
                  : item.title
              }
              author={item.author}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sports;
