import Card from "react-bootstrap/Card";
import NewsCard from "../Card/Index";

function BigCard() {
  return (
    <div
      className="col-3 row"
      style={{
        height: "16.5rem",
        marginRight: "0.2rem",
      }}
    >
      <Card
        className="text-white"
        style={{
          // width: "19rem",
          height: "15rem",
        }}
      >
        <Card.Img
          src="https://s2.glbimg.com/TfRVj-U3LcPN0VR3wSpgkRqwN1E=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/e/W/gjmPKgTymDHKFKh2bdyA/2106-bandeiras-tarifarias.png"
          style={{
            // width: "19rem",
            height: "14rem",
          }}
        />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      {/* <div
        style={{
          padding: "0px",
          marginTop: "1rem",
        }}
      >
        <a
          href="https://ge.globo.com/rs/futebol/times/gremio/noticia/2022/12/31/gremio-anuncia-contratacao-de-luis-suarez.ghtml"
          style={{
            width: "30rem",
            height: "7.5rem",
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
                  <Card.Title className="fs-6 bold">
                    Grêmio anuncia contratação de Luís Suárez - Globo.com
                  </Card.Title>
                  <Card.Text className="fs-7 position-absolute bottom-0 end-0">
                    Jornal Local
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </a>
      </div>
    </div> */}

      <NewsCard
        key="999"
        url="https://ge.globo.com/rs/futebol/times/gremio/noticia/2022/12/31/gremio-anuncia-contratacao-de-luis-suarez.ghtml"
        image="https://s2.glbimg.com/sockztu4dmA9kSX_Bg6TL1e3mFA=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11245223.jpg"
        title="Grêmio anuncia contratação de Luís Suárez - Globo.com"
        author="Jornal Local"
      />
    </div>
  );
}

export default BigCard;
