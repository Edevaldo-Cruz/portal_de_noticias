import NewsCard from "../Card/Index";
import { Card } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useAPI } from "../../hooks/useAPI";
import SpecialCard from "../SpecialCard/Index";

export const TopNews = () => {
  const { itens: news } = useAPI(
    "top-headlines?country=br&apiKey=9440f38accc54afdacaacd4d6c481ebe"
  );
  return (
    <>
      <div
        style={{
          marginTop: "4rem",
          marginBottom: "1.5rem",
          borderTopStyle: "solid",
          borderTopWidth: 4,
          borderTopColor: "#000",
        }}
      >
        <ul className="d-flex justify-content-between">
          <Nav.Link>
            <h4>Notícias</h4>
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
      <div className="row d-flex mb-4">
        <div
          className="col-3"
          style={{
            width: "30rem",
            height: "23.5rem",
            marginTop: "1rem",
            marginRight: "1.5rem",
          }}
        >
          {news.slice(19, 20).map((item, key) => (
            <SpecialCard
              url={item.url}
              img={item.urlToImage}
              title={item.title}
              description={item.description}
              author={item.author}
            />
          ))}
        </div>

        <div
          className="col-3"
          style={{
            width: "35rem",
            height: "24rem",
          }}
        >
          {news.slice(13, 16).map((item, key) => (
            <NewsCard
              key={item.url}
              url={item.url}
              image={item.urlToImage}
              title={item.title}
              author={item.author}
            />
          ))}
        </div>
        <div
          style={{
            width: "35rem",
            height: "24rem",
          }}
        >
          {news.slice(16, 19).map((item, key) => (
            <NewsCard
              key={item.url}
              url={item.url}
              image={item.urlToImage}
              title={item.title}
              author={item.author}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopNews;
