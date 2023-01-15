import Carousel from "react-bootstrap/Carousel";
import outlook from "../../assets/outlook.png";
import videoGame from "../../assets/videoGame.png";
import facebook from "../../assets/facebook.png";
import esportes from "../../assets/esporte.png";
import mercadoLivre from "../../assets/mercadoLivre.png";
import compras from "../../assets/compras.png";
import booking from "../../assets/booking.png";
import aprendaIngles from "../../assets/ingles.png";
import jogosOnline from "../../assets/jogosOnline.png";
import office from "../../assets/office.png";
import skype from "../../assets/skype.png";
import oneDrive from "../../assets/OneDrive.svg";
import microsoftStore from "../../assets/store.png";

function LinkCarousel() {
  return (
    <Carousel
      interval={9999999}
      indicators={false}
      style={{ marginTop: "10rem" }}
    >
      <Carousel.Item>
        <div className="row">
          <a
            className="col"
            href="https://outlook.com/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={outlook} alt="icone outlook" />
              <text className="ms-1">Outlook.com</text>
            </div>
          </a>
          <a
            className="col"
            href="https://ww55.affinity.net/sssdomweb?enk=bd574e123f87ffc588c1bd7212d3e13e410df2ae96f451e9b5f699f8cc057105fda4ffb03e2e498b3984d1e2aa099e2f76ca6e70a64c858580356a4ac02f4175a6e89f868fe8e93c"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={videoGame} alt="icone outlook" />
              <text className="ms-1">Video Game</text>
            </div>
          </a>
          <a
            className="col"
            href="https://www.facebook.com/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={facebook} alt="icone outlook" />
              <text className="ms-1">Facebook</text>
            </div>
          </a>
          <a
            className="col"
            href="https://www.msn.com/pt-br/esportes?ocid=StripeOCID&cvid=cb933c86e219409497b26580606ba535"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={esportes} alt="icone outlook" />
              <text className="ms-1">Esportes</text>
            </div>
          </a>
          <a
            className="col"
            href="https://ww55.affinity.net/sssdomweb?enk=bd574e123f87ffc588c1bd7212d3e13e410df2ae96f451e9847beb151f58c8407a947ef5dc6cfe883778505750736fc476ca6e70a64c858580356a4ac02f4175a6e89f868fe8e93c"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={mercadoLivre} alt="icone outlook" />
              <text className="ms-1">Mercado Livre</text>
            </div>
          </a>
          <a
            className="col"
            href="https://www.msn.com/pt-br/shopping?cvid=986011676e9c4195991f19f0a599ea6a"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={compras} alt="icone outlook" />
              <text className="ms-1">Compras</text>
            </div>
          </a>
          <a
            className="col"
            href="https://sp.booking.com/index.html?aid=1535066&label=ptbr-prime-hp-me"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={booking} alt="icone outlook" />
              <text className="ms-1">Booking.com</text>
            </div>
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row">
          <a
            className="col"
            href="https://takelessons.com/pt-br/language/esl-lessons?utm_source=msn&utm_medium=mestripe&utm_campaign=neweslpages"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={aprendaIngles} alt="icone outlook" />
              <text className="ms-1">Aprenda Inglês gratis</text>
            </div>
          </a>
          <a
            className="col"
            href="https://www.msn.com/pt-br/play?ocid=ogme1&cvid=ff6cfa77d984490ca326046147730c89"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={jogosOnline} alt="icone outlook" />
              <text className="ms-1">Jogos online</text>
            </div>
          </a>
          <a
            className="col"
            href="https://click.linksynergy.com/deeplink?id=xoqYgl4JDe8&mid=42431&u1=ptbr_mestripe_office&murl=https://www.microsoft.com/pt-br/microsoft-365/microsoft-office"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={office} alt="icone outlook" />
              <text className="ms-1">Office</text>
            </div>
          </a>
          <a
            className="col"
            href="https://www.skype.com/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={skype} alt="icone outlook" />
              <text className="ms-1">Skype</text>
            </div>
          </a>
          <a
            className="col"
            href="https://ww55.affinity.net/sssdomweb?enk=bd574e123f87ffc588c1bd7212d3e13e410df2ae96f451e9847beb151f58c8407a947ef5dc6cfe883778505750736fc476ca6e70a64c858580356a4ac02f4175a6e89f868fe8e93c"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={mercadoLivre} alt="icone outlook" />
              <text className="ms-1">Mercado Livre</text>
            </div>
          </a>
          <a
            className="col"
            href="https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img
                src={oneDrive}
                alt="icone OneDrive"
                style={{ width: "2rem", height: "2rem" }}
              />
              <text className="ms-1">OneDrive</text>
            </div>
          </a>
          <a
            className="col"
            href="https://click.linksynergy.com/deeplink?id=xoqYgl4JDe8&mid=42431&u1=ptbr_mestripe_store&murl=https://www.microsoft.com/pt-br"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img src={microsoftStore} alt="icone outlook" />
              <text className="ms-1">Microsoft Store</text>
            </div>
          </a>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default LinkCarousel;
