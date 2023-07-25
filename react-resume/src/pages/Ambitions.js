import "../stylesheets/layout.css";
import "../stylesheets/design.css";
import { Row, Col, Button, Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import space from "../imgs/northern_lights.jpg";
import Helmet from "react-helmet";
import Navigation from "../components/navigation";
import Typewriter from "typewriter-effect";
import Footer from "../components/footer";

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
        <h1>What do I want to do?</h1>
        <Row>
          <h2>
            Where will my{" "}
            <b>
              <i> Bachelor of Information Technology </i>
            </b>{" "}
            take me? <br></br>
            <p></p>{" "}
          </h2>
          <Col md={4}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <Card.Title>Majoring in Computer Science</Card.Title>
                <Card.Text>
                  <p>
                    I love problem solving. Programming is where I find myself
                    enjoying a problem the most. There is always a way to solve
                    something, I love the feeling of fixing a problem and seeing
                    my code work exactly how I envision.<br></br>
                    <br></br>
                    Highlights:
                    <ul>
                      <li>
                        Use of hardware and software to design and build systems
                        to solve complex problems or issues associated with
                        efficiency, usability, and security.
                      </li>
                      <li>Learn software development and networked system</li>
                      <li>
                        Understand how an effective blend of information
                        technology skills and business knowledge shape
                        industries of the future
                      </li>
                    </ul>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <Card.Title>Minoring in IOT</Card.Title>
                <Card.Text>
                  <p>
                    Internet of Things is something that really interested me in
                    my first year and I am passionate about how technology can
                    improve businesses, solve problems and intergrate into
                    everyday life.
                    <br></br>
                    <br></br>
                    Highlights:
                    <ul>
                      <li>
                        Provides the theoretical and technical knowledge and
                        skills to design and develop cost-effective
                        cross-platform IoT solutions
                      </li>
                      <li>
                        Learning how to devlop and deploy IOT devices such as
                        sensor networks, mobile, and wearable devices
                      </li>
                      <li>
                        Provides the skillset necessary to build innovative IoT
                        solutions using industry-standard tools
                      </li>
                    </ul>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Body>
                <Card.Title>
                  Minoring in Networks and Information Security
                </Card.Title>
                <Card.Text>
                  This massive field is exactly where I want to grow my skills
                  and learn real world processes. Security is so critical and
                  data is the most significant currency to ever exist.
                  <br></br>
                  <br></br>
                  Highlights:
                  <ul>
                    <li>
                      Develops the knowledge and skills involved in contemporary
                      electronic communications infrastructure, concentrating on
                      fundamental networking technologies and information
                      security principles
                    </li>
                    <li>
                      Build a good understanding of the web and its
                      architecture, especially software developers and those
                      tasked with maintaining and implementing web-based
                      software systems
                    </li>
                  </ul>
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

export default Ambitions;
