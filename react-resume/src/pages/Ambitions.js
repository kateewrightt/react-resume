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
        <h1>What do I want to do?</h1>
        <Row>
          <h2>Areas I want my degree to take me:</h2>
          <p>
            Bachelor of Information Technology <br></br>
            Majoring in Computer Science <br></br>
            Minoring in IOT and Security
          </p>
        </Row>
      </div>
    </div>
  );
}

export default Ambitions;
