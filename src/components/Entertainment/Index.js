import React from "react";
import SpecialCard from "../SpecialCard/Index";
import { useAPI } from "../../hooks/useAPI";
import NewsCard from "../Card/Index";
import Nav from "react-bootstrap/Nav";
import { FaChevronRight } from "react-icons/fa";
import "./Styles.css";

function Entertainment() {
  const { itens: news } = useAPI(
    "top-headlines?country=br&category=entertainment&apiKey=" +
      process.env.REACT_APP_API_NEWS
  );
  return (
    <>
      <div className="mt-4 lineEntertainment">
        <ul className="d-flex justify-content-start center">
          <Nav.Link
            className="me-4"
            href="https://www.msn.com/pt-br/esportes?cvid=4cbdda808867443192368eec3dcd5bd7"
          >
            <h1 className="colorEntertainment">
              Entertenimento <FaChevronRight size={"25px"} />
            </h1>
          </Nav.Link>
          <Nav.Link
            className="link enterteinment mr-4 me-4"
            href="https://www.msn.com/pt-br/entretenimento/famosos?cvid=1658024b9f394aaa8ef90cf96c3efea3"
          >
            <b>FAMOSOS</b>
          </Nav.Link>
          <Nav.Link
            className="link enterteinment me-4"
            href="https://www.msn.com/pt-br/tv?cvid=1658024b9f394aaa8ef90cf96c3efea3"
          >
            <b>TV</b>
          </Nav.Link>
          <Nav.Link
            className="link enterteinment  me-4"
            href="https://www.msn.com/pt-br/cinema?cvid=1658024b9f394aaa8ef90cf96c3efea3"
          >
            <b>CINEMA</b>
          </Nav.Link>
          <Nav.Link
            className="link enterteinment  me-4"
            href="https://www.msn.com/pt-br/musica?cvid=1658024b9f394aaa8ef90cf96c3efea3"
          >
            <b>MÚSICA</b>
          </Nav.Link>
          <Nav.Link
            className="link enterteinment  me-4"
            href="https://www.msn.com/pt-br/esportes/basquete?cvid=4cbdda808867443192368eec3dcd5bd7"
          >
            <b>JOGOS</b>
          </Nav.Link>
          <Nav.Link
            className="link enterteinment  me-4"
            href="https://www.msn.com/pt-br/entretenimento/jogos?cvid=1658024b9f394aaa8ef90cf96c3efea3"
          >
            <b>SÉRIES DE TV</b>
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
        <div className="col-3 divNews">
          {news.slice(1, 2).map((item) => (
            <SpecialCard
              key={item.url}
              url={item.url}
              img={item.urlToImage}
              title={item.title}
              description={
                item.description.length > 60
                  ? item.description.substring(0, 60) + "..."
                  : item.description
              }
              author={item.author}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Entertainment;
