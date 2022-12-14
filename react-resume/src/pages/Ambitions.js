import "../stylesheets/layout.css";
import "../stylesheets/design.css";
import { Row, Col, Button, Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import space from "../imgs/northern_lights.jpg";
import Helmet from "react-helmet";
import Navigation from "../components/navigation";
import Typewriter from "typewriter-effect";

function Ambitions() {
  return (
    <div className="Background">
      <Helmet bodyAttributes={{ style: "background-color : aliceblue" }} />
      <div>
        <div id="carouselhome" class="mycarousel" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="carousel_img d-block" src={space} alt="First slide" />
              <div className="Navbar_over_img">
                <Navigation />
              </div>
              <div class="carousel_caption d-block">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("My ambitions could span through space...")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Content">
        <h1>What can I do?</h1>
        <Row>
          <h2>Projects I have completed:</h2>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Body>
                <Card.Title>Maze Solver</Card.Title>
                <Card.Text>
                  Java project, creating software to build a maze and find the
                  shorest path through. Allowed the user to specifiy
                  requirements for the maze and generate their own, with
                  corresponding solutions.
                </Card.Text>
                <div class="card-footer text-center">
                  <Button class="mt-auto" variant="info">
                    Learn More
                  </Button>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Body>
                <Card.Title>Peg Solitare</Card.Title>
                <Card.Text>
                  Python project, solving a discrete mathematic puzzle. I chose
                  to make a program to solve peg solitare. Used 'X' to represent
                  a peg and 'o' to represent a hole.
                </Card.Text>
                <div class="card-footer text-center">
                  <Button class="mt-auto" variant="info">
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Body>
                <Card.Title>REST API</Card.Title>
                <Card.Text>
                  Javascript project, deploying an express application to create
                  a REST API. The API uses middleware security and used Swagger
                  to test all endpoints. docs.
                </Card.Text>
                <div class="card-footer text-center">
                  <Button class="mt-auto" variant="info">
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Body>
                <Card.Title>React Web App</Card.Title>
                <Card.Text>
                  <p>
                    Javascript project, creating a React based web application
                    to allow users to view and analyse data exposed via a REST
                    API.
                  </p>
                  <br></br>
                  <br></br>
                  <br></br>
                </Card.Text>
                <div class="card-footer text-center">
                  <Button class="mt-auto" variant="info">
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <br></br>
        </Row>
        <Row>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Body>
                <Card.Title>MVP Web System</Card.Title>
                <Card.Text>
                  Javascript project, creating React web app and REST API
                  integrated with Node-Red flows, deployed on DockerHub. The
                  problemspace was introduced by a real-world institution in
                  need of a technological solution.
                  <br></br>
                  <br></br>
                  <br></br>
                </Card.Text>
                <div class="card-footer text-center">
                  <Button class="mt-auto" variant="info">
                    Learn More
                  </Button>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Body>
                <Card.Title>Music Player</Card.Title>
                <Card.Text>
                  C project, creating a music player on a virtual
                  microcontroller. Involved low level processes and interacting
                  with bits to control the system.
                </Card.Text>
                <div class="card-footer text-center">
                  <Button class="mt-auto" variant="info">
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Body>
                <Card.Title>Bidding System</Card.Title>
                <Card.Text>
                  C# project, using object-oriented principles to develop a
                  trading program operating in the terminal. Mainly involved the
                  user listing houses for sale, and auctioning them off. Also
                  allowed users to bid in other auctions.
                </Card.Text>
                <div class="card-footer text-center">
                  <Button class="mt-auto" variant="info">
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Body>
                <Card.Title>Love Letter Site</Card.Title>
                <Card.Text>
                  <p>
                    PHP project, using a Raspberry Pi to deploy a web server and
                    site. My site allowed users to send love letters that would
                    be stored on the server and could be accessed by the
                    recipient of the letter.
                  </p>
                  <br></br>
                </Card.Text>
                <div class="card-footer text-center">
                  <Button class="mt-auto" variant="info">
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Ambitions;
