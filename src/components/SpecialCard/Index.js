import Card from "react-bootstrap/Card";

function SpecialCard() {
  return (
    <Card style={{ width: "23.75rem", height: "21rem", padding: "0px" }}>
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0Nfte7TLGNfIxnsvn6V84vEJStXOm69kRS0uVHdE2t2g5tVoFa1gFTHwnuFReXmmovU&usqp=CAU"
        style={{ width: "23.75rem", height: "11rem", padding: "0px" }}
      />
      <Card.Body>
        <Card.Text>
          <b>
            Ao longo de suas órbitas, ela se aproximará gradativamente da
            estrela até chegar a 8,86 raios solares (cerca de 6,2 milhões de
            quilômetros) de sua fotosfera.
          </b>
        </Card.Text>
        <Card.Text className="text-end">wikipedia</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SpecialCard;
