import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";

function NewNavbar() {
  return (
    <Navbar
      className="shadow mb-5"
      sticky="top"
      style={{ height: "6.75rem", backgroundColor: "#f4f4f2" }}
    >
      <Container
        style={{ maxWidth: "1600px", alignItems: "center", margin: "auto" }}
      >
        <div className="row d-flex justify-content-between">
          <Navbar.Brand className="col" href="#">
            Navbar scroll
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          {/* <Navbar.Collapse id="navbarScroll"> */}
          <Nav
            className="me-auto my-2 my-lg-0 col"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <InputGroup
            className="mb-3 shadow col"
            style={{ width: "40rem", height: "3.5rem" }}
          >
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="col"
            />
            <Button
              className="btn btn-primary"
              variant="outline-secondary"
              id="button-addon2"
            >
              Button
            </Button>
          </InputGroup>
          <div className="row col">
            <p className="col">1</p>
            <p className="col">2</p>
            <p className="col">3</p>
          </div>
          {/* </Navbar.Collapse> */}
        </div>
      </Container>
    </Navbar>
  );
}

export default NewNavbar;
