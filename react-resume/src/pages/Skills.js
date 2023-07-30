import "../stylesheets/layout.css";
import "../stylesheets/design.css";
import { Row, Col, Button, Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";

import ocean from "../imgs/vast_ocean.jpg";
import Helmet from "react-helmet";
import Navigation from "../components/navigation";
import Typewriter from "typewriter-effect";
import Footer from "../components/footer";

function Skills() {
  return (
    <div className="Background">
      <Helmet bodyAttributes={{ style: "background-color : aliceblue" }} />
      <div>
        <div id="carouselhome" class="mycarousel" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="carousel_img d-block" src={ocean} alt="First slide" />
              <div className="Navbar_over_img">
                <Navigation />
              </div>
              <div className="Introduction">
                <p>
                  I just made a new website so you guys at capstone can see my
                  skills better:
                </p>
                <a href="https://katewright.netlify.app/">
                  https://katewright.netlify.app/
                </a>
                <p>Please be patient as it is Brand New!</p>
              </div>
              <div class="carousel_caption d-block">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("My skills are like a vast ocean...")
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
          <p></p>
          <Col md={3}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <p></p>
                <Card.Title> Random Maze Solver</Card.Title>
                <Card.Subtitle>
                  <i>Java</i>
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  GUI app that builds a maze using design requirments and finds
                  the shortest path through. The user is able to submit their
                  own maze for the system to solve, or specify requirements for
                  the system to include in a generated maze.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <p></p>
                <Card.Title>Peg Solitare Solver</Card.Title>
                <Card.Subtitle>
                  <i>Python</i>
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  Terminal application that uses discrete mathematics including
                  Regular Languages and Finite State Automata to determine how
                  to solve a given Peg Solitare game. Used 'X' to represent a
                  peg and 'o' to represent a hole.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <p></p>
                <Card.Title>Volcano API</Card.Title>
                <Card.Subtitle>
                  <i>JavaScript, JUnit, Express</i>
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  An express application to create a REST API using worldwide
                  volcano data. The API uses middleware security and Swagger
                  docs to test all endpoints.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <p></p>
                <Card.Title>Volcano Website</Card.Title>
                <Card.Subtitle>
                  <i>Javascript, React, SQL</i>
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  <p>
                    A React application that accesses data from an exposed REST
                    API. Using SQL to fetch relevant data to the user and
                    displaying it appropriately.
                  </p>
                  <br></br>
                  <br></br>
                  <br></br>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <br></br>
        </Row>
        <Row>
          <Col md={3}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <p></p>
                <Card.Title>Hospital Room Manager</Card.Title>
                <Card.Subtitle>
                  <i>Javascript, Node, AWS, React, Docker, SQL</i>
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  The problem space, introduced by an outside institution,
                  demonstrates the need for a technological solution to the
                  problem of space allocation in clincal spaces. The need is for
                  a Web App that can track real-time if a given room is
                  occuipied or not. Using Node-Red flows our team created a
                  simulation environment that used IoT devices to track room
                  occupation and store this data in a REST API. I managed the
                  React App side of the project and used SQL to access this data
                  and display it appropriately. This project was deployed on
                  DockerHub.
                  <br></br>
                  <br></br>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <p></p>
                <Card.Title>Music Player</Card.Title>
                <Card.Subtitle>
                  <i>C</i>
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  Using a virtual microcontroller I experimented with wiring and
                  bit conversions to create a small music player. This music
                  player can play christmas tunes and nursery rhymes
                  beautifully.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <p></p>
                <Card.Title>Spot Trading App</Card.Title>
                <Card.Subtitle>
                  <i>C#</i>
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  A terminal spot trading app for properties. Allowed user to
                  list houses for sale, place bids on houses and to accept bids.
                  Used orderbook functionality to match bidders and sellers to
                  determine which properties could be sold off.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <p></p>
                <Card.Title>Doggy Love Letter Website</Card.Title>
                <Card.Text>
                  <Card.Subtitle>
                    <i>PHP, SQL</i>
                  </Card.Subtitle>
                  <br></br>
                  <p>
                    Used a Raspberry Pi to deploy a web server and web site. The
                    site hosted a range of dog photos and descriptions and
                    provided a way for users to send direct messages and 'love
                    letters' to these specific dogs. Each love letter is stored
                    in the database and the dogs recieve their own love letters
                    in real-time as they are submitted.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Skills;
