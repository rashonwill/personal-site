import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Card } from "react-bootstrap";
import "./style sheets/index.css";
import { useState, useEffect, useRef } from "react";
import Modal from "react-modal";

const App = () => {
  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);

  const goToHome = () => homeSection.current.scrollIntoView();
  const goToAbout = () => aboutSection.current.scrollIntoView();
  const goToProjects = () => projectsSection.current.scrollIntoView();
  const goToContact = () => contactSection.current.scrollIntoView();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="links">
          <Nav.Link id="home" onClick={goToHome}>
            Home
          </Nav.Link>
          <Nav.Link id="about" onClick={goToAbout}>
            About
          </Nav.Link>
          <Nav.Link id="projects" onClick={goToProjects}>
            Projects
          </Nav.Link>
          <Nav.Link id="contact" onClick={goToContact}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>{" "}
      <div class="home-pg" ref={homeSection}>
        <div class="resume">
          <div class="access">
            <h1>The name is Rashon Williams and I am a 
           <div class="glitch"> CREATOR
            <span id="span">CREATOR</span>
            <span id="span">CREATOR</span>
            </div>
             </h1>
          </div>
        </div>
        <div class="background-pic">
          <img
            class="bg-image"
            src="https://faribucket.s3.amazonaws.com/1629464622097_Rashon.png"
          ></img>
        </div>
      </div>
      <div class="about-pg" ref={aboutSection}>
        <h1>About</h1>
        <div class="within-about">
          <div class="about-me">
            <p>
              Bonjour! So, a little about me... I've been an IT professional for
              the past 7 years. I have an Assoicates in Network Adminstration
              and currently looking to start a career in frontend Web
              Development.
              <br></br>
              <br></br>
              I've worked in various IT positions, starting from a Software
              Support Tech, a Quality Assurance Analyst, a Systems Analyst and
              currently working as a Technical Support Specialist.
              <br></br>
              <br></br>
              Go ahead and take a peak at my resume for more!
            </p>
          </div>
          <div class="resume-btn">
            <Button variant="dark">Resume</Button>{" "}
          </div>
        </div>
      </div>
      <div class="projects-pg" ref={projectsSection}>
        <h1>Projects</h1>

        <div class="project-cards">
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              src="https://faribucket.s3.amazonaws.com/1631123442944_Fari%20-%20Fari.PNG"
            />
            <Card.Body>
              <Card.Title>Fari</Card.Title>
              <Card.Text>
                Video Sharing Platform for Original Film Creators and Lifestyle
                Vloggers.
              </Card.Text>
              <Button variant="primary">
                <a href="https://fari-test.netlify.app" target="_blank">Visit Fari</a>
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              src="https://faribucket.s3.amazonaws.com/1630504972517_large%20pizza.jpeg"
            />
            <Card.Body>
              <Card.Title>Dirty Keto</Card.Title>
              <Card.Text>
                Guide to a pleasing Keto diet without giving up your favorite
                meals.
              </Card.Text>
              <Button variant="primary">
                <a href="#" target="_blank">Visit Dirty Keto</a>
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              src="https://image.pngaaa.com/497/242497-middle.png"
            />
            <Card.Body>
              <Card.Title>Spotify</Card.Title>
              <Card.Text>
                Spotify API Project, check out some of your favorite jams.
              </Card.Text>
              <Button variant="primary">
                <a href="#" target="_blank">Visit My-Spotify</a>
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              src="https://www.clipartmax.com/png/middle/365-3651977_section-image-new-york-times-logo-transparent.png"
            />
            <Card.Body>
              <Card.Title>The Times</Card.Title>
              <Card.Text>
                Current Events and World News Site. Stay informed! Visit the Times!
              </Card.Text>
              <Button variant="primary">
                <a href="#" target="_blank">Visit The Times</a>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div class="contacts-pg" ref={contactSection}>
        <h1>Contact Me</h1>
        <div class="contact-form">
          <form class="contact-me">
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <textarea placeholder="Let's Connect"></textarea>
      <div class="image">
    <i class="fa fa-linkedin"></i>
     <i class="fa fa-github" aria-hidden="true"></i>
</div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div class="scrollUp">
        <i
          class="fa fa-arrow-circle-up"
          aria-hidden="true"
          onClick={goToHome}
        ></i>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
