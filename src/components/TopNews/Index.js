import NewsCard from "../Card/Index";
import Nav from "react-bootstrap/Nav";
import { useAPI } from "../../hooks/useAPI";
import SpecialCard from "../SpecialCard/Index";
import { FaChevronRight } from "react-icons/fa";

export const TopNews = () => {
  const { itens: news } = useAPI(
    "top-headlines?country=br&apiKey=" + process.env.REACT_APP_API_NEWS
  );
  return (
    <>
      <div className="lineNews">
        <ul className="d-flex justify-content-between center">
          <h1>
            Notícias <FaChevronRight size={"25px"} />
          </h1>

          <Nav.Link></Nav.Link>
          <Nav.Link
            className="colorRed"
            href="https://www.msn.com/pt-br/noticias/brasil?cvid=575e8a2410d742b6942d94d7073cf5f3"
          >
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
        <div className="col-3 divNews">
          {news.slice(0, 1).map((item, key) => (
            <SpecialCard
              key={key}
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
        <div className="col-3 divCard">
          {news.slice(9, 12).map((item, key) => (
            <NewsCard
              key={key}
              url={item.url}
              image={item.urlToImage}
              title={
                item.title.length > 60
                  ? item.title.substring(0, 60) + "..."
                  : item.title
              }
              author={item.author}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopNews;
