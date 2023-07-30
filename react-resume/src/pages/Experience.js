import "../stylesheets/layout.css";
import "../stylesheets/design.css";
import { Row, Col, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import Footer from "../components/footer";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import Card from "react-bootstrap/Card";
import city from "../imgs/city_skyline.jpeg";
import Helmet from "react-helmet";
import Navigation from "../components/navigation";
import Typewriter from "typewriter-effect";

function Experience() {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="Background">
      <Helmet bodyAttributes={{ style: "background-color : aliceblue" }} />
      <div>
        <div id="carouselhome" class="mycarousel" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="carousel_img d-block" src={city} alt="First slide" />
              <div className="Navbar_over_img">
                <Navigation />
              </div>
              <div className="Introduction">
                <p>
                  I just made a new website so you guys at capstone can see my
                  skills better:
                </p>
                <a
                  href="https://katewright.netlify.app/"
                  className="website-link"
                >
                  https://katewright.netlify.app/
                </a>
                <p>Please be patient as it is Brand New!</p>
              </div>
              <div class="carousel_caption d-block">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "My experience is *almost* as tall as a skyscraper"
                      )
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
        <h1>What have I done?</h1>
        <Row>
          <h2>My Experience:</h2>
          <Col md={12}>
            <div>
              <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    Bielby Holdings - IT Undergraduate
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <strong>
                      April 2023 - Present<br></br>
                    </strong>
                    <p>
                      Presently, I am a part of the IT department at Bielby
                      Holdings, where my role as an IT Undergraduate involves
                      overseeing and executing various projects.
                    </p>
                    <p>In my role, I have:</p>
                    <ul>
                      <li>
                        Successfully managed a company-wide Active Directory
                        (AD) to Azure Active Directory (AAD) migration.
                      </li>
                      <li>Implemented InTune Device Management.</li>
                      <li>Provided application support for Azure DevOps.</li>
                      <li>Performed in-depth analysis of Power BI reports.</li>
                      <li>
                        Made significant contributions to the organization's IT
                        infrastructure.
                      </li>
                      <li>
                        Developed skills in project management and technical
                        support through this experience.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">
                    Moreton Bay Colleges - IT Support Officer
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <strong>
                      Dec 2021 - Nov 2022<br></br>
                    </strong>
                    <p>
                      This last year I have worked in a small team in the IT
                      department at Moreton Bay Colleges. I was one of the first
                      points of contact when issues would occur, may that be
                      staff or student. I worked with both hardware and software
                      issues for devices ranging from laptops to laser cutters.
                    </p>
                    <p> My support included:</p>
                    <ul>
                      <li>
                        Providing troubleshooting and technical support for the
                        company of 1000+ staff and students
                      </li>
                      <li>
                        Maintaining operational and security standards for a
                        fleet of devices
                      </li>
                      <li>
                        Use of Active Directory tools and monitoring tools to
                        assist in providing access controls and remote
                        monitoring of computers and file services
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">
                    Girls Programming Network - Tutor
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <strong>
                      2021<br></br>
                    </strong>
                    <p>
                      My university hosted some highschool engagement days
                      specifically focused on encouraging teenage girls to take
                      up space in the world of STEM. As a tutor I supervised
                      classes of ~20 students as they completed coding
                      challenges. This event was designed to give these students
                      confidence in their own skills and solidify their
                      understanding of women in code.
                    </p>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
            <br></br>
            <h2>My Achievements:</h2>
            <div>
              <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="4">
                    Westpac Young Technologist Scholar
                  </AccordionHeader>
                  <AccordionBody accordionId="4">
                    <strong>
                      Jan 2020 - Present<br></br>
                    </strong>
                    <p>
                      This scholarship is aimed towards undergraduate students
                      with 'a passion for technology that changes the world'. I
                      am very grateful for this scholarship and for the
                      opportunities I have received because of it. In July 2022
                      I spent a week in Sydney with other scholars where we
                      engaged in the 'Disruptive Leaders Program' with countless
                      team building exercises and listened to many inspiring
                      speakers. We also spent some time completing a 'Challenge'
                      that was given to us by an industry company. This
                      challenge involved solving a real-world road block this
                      company is facing. Through a lens of both technology and
                      business we were asked to come up with real-world
                      solutions. I have learnt a lot from this scholarship and I
                      have gained confidence in my own ability in this industry
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="5">
                    QUT Design Robotics Internship
                  </AccordionHeader>
                  <AccordionBody accordionId="5">
                    <strong>
                      2020<br></br>
                    </strong>
                    <p>
                      In my senior year of highschool I applied to be involved
                      in the QUT Young Accelerators program and successfully
                      spent a week in the Design Robotics internship at QUT. The
                      design robotics placement group studied the relationship
                      that humans and machines share, specifically exploring new
                      possibilities on how machines can be used to visualise
                      data using a light painting approach. Through the
                      programming of a collaborative robot and an LED light
                      strip, Australian and Indigenous population data dating
                      back to 1788 was to be presented in a real-life space and
                      visualised by taking a long exposure image. The aim of the
                      project was to build a program that could read a csv file
                      and scale this data into a certain number of LEDs, thus
                      producing a legible histogram graph.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="6">
                    Australian Defence Force Future Innovators Award
                  </AccordionHeader>
                  <AccordionBody accordionId="6">
                    <strong>
                      2020<br></br>
                    </strong>
                    <p>
                      This is an award from my senior year of high school that
                      recognises students who demonstrate innovation and
                      learning in STEM fields.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="7">
                    Digital Solutions Top of Class
                  </AccordionHeader>
                  <AccordionBody accordionId="7">
                    <strong>
                      2020<br></br>
                    </strong>
                    <p>
                      High school award for achieveing the highest grade in
                      Digital Solutions in my senior year.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="8">High GPA</AccordionHeader>
                  <AccordionBody accordionId="8">
                    <strong>
                      2021<br></br>
                    </strong>
                    <p>GPA of 7.0 in 2021</p>
                    <p>GPA of 6.5 in 2022</p>
                    <p>GPA of 6.5 in 2023</p>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </Col>
        </Row>
        <br></br>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Experience;
