import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import NewsCard from "../Card/Index";

function ContainerCard() {
  return (
    <Card style={{ width: "23.75rem", height: "21rem", padding: "0px" }}>
      <ListGroup variant="flush">
        <a
          className="text-underline-hover"
          href="https://ge.globo.com/rs/futebol/times/gremio/noticia/2022/12/31/gremio-anuncia-contratacao-de-luis-suarez.ghtml"
          style={{
            width: "23.75rem",

            padding: "0px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <Card>
            <Card.Body className="p-2">
              <div className="row">
                <div className="col-2">
                  <Card.Img
                    src="https://s2.glbimg.com/sockztu4dmA9kSX_Bg6TL1e3mFA=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11245223.jpg"
                    style={{
                      width: "6rem",
                      height: "6rem",
                      margin: "0rem",
                    }}
                  />
                </div>
                <div className="col-10">
                  <Card.Title
                    className="fs-6 ms"
                    style={{ marginLeft: "3.2rem" }}
                  >
                    "Grêmio anuncia contratação de Luís Suárez - Globo.com"
                  </Card.Title>
                  <Card.Text className="text-end align-text-bottom">
                    "Jornal Local"
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </a>
        <a
          className="text-underline-hover"
          href="https://ge.globo.com/rs/futebol/times/gremio/noticia/2022/12/31/gremio-anuncia-contratacao-de-luis-suarez.ghtml"
          style={{
            width: "23.75rem",

            padding: "0px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <Card>
            <Card.Body className="p-2">
              <div className="row">
                <div className="col-2">
                  <Card.Img
                    src="https://s2.glbimg.com/sockztu4dmA9kSX_Bg6TL1e3mFA=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11245223.jpg"
                    style={{
                      width: "6rem",
                      height: "6rem",
                      margin: "0rem",
                    }}
                  />
                </div>
                <div className="col-10">
                  <Card.Title
                    className="fs-6 ms"
                    style={{ marginLeft: "3.2rem" }}
                  >
                    "Grêmio anuncia contratação de Luís Suárez - Globo.com"
                  </Card.Title>
                  <Card.Text className="text-end align-text-bottom">
                    "Jornal Local"
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </a>
        <a
          className="text-underline-hover"
          href="https://ge.globo.com/rs/futebol/times/gremio/noticia/2022/12/31/gremio-anuncia-contratacao-de-luis-suarez.ghtml"
          style={{
            width: "23.75rem",

            padding: "0px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <Card>
            <Card.Body className="p-2">
              <div className="row">
                <div className="col-2">
                  <Card.Img
                    src="https://s2.glbimg.com/sockztu4dmA9kSX_Bg6TL1e3mFA=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11245223.jpg"
                    style={{
                      width: "6rem",
                      height: "6rem",
                      margin: "0rem",
                    }}
                  />
                </div>
                <div className="col-10">
                  <Card.Title
                    className="fs-6 ms"
                    style={{ marginLeft: "3.2rem" }}
                  >
                    "Grêmio anuncia contratação de Luís Suárez - Globo.com"
                  </Card.Title>
                  <Card.Text className="text-end align-text-bottom">
                    "Jornal Local"
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </a>
      </ListGroup>
    </Card>
  );
}

export default ContainerCard;
