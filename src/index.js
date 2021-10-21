import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Card } from "react-bootstrap";
import "./style sheets/index.css";
import { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { $ }  from "react-jquery-plugin";

const App = () => {
  const [resume, setResume] = useState(false);
  
{  
  (() => {
  $('.page1').addClass('current-pg');
})();
}
  
  class Example extends Component{
    componentDidMount() {
    viewEducation();
    viewHistory();
    viewSkills();
    viewContact();
      nextBtn();
      previousBtn();
    }
  }
  

  function viewEducation(){
    $('.education').css('display', 'initial');
  $('.workhistory').css('display', 'none');
  $('.skills').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.page1').addClass('current-pg').siblings().removeClass("current-pg");
  }
    function viewHistory(){
    $('.workhistory').css('display', 'initial');
  $('.education').css('display', 'none');
  $('.skills').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.page2').addClass('current-pg').siblings().removeClass("current-pg");
  }
  
    function viewSkills(){
    $('.skills').css('display', 'initial');
  $('.workhistory').css('display', 'none');
  $('.education').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.page3').addClass('current-pg').siblings().removeClass("current-pg");
  }
 
function nextBtn(){
if($('.workhistory').css('display') === 'none'){
viewHistory();
}else if($('.workhistory').css('display') !== 'none') {
viewSkills();
  }
};

function previousBtn(){
if($('.skills').css('display') !== 'none'){
viewHistory();
}else if($('.workhistory').css('display') !== 'none') {
viewEducation();
   }
};
  
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
            <Button variant="dark" onClick={() => {
            setResume(true);
          }}>Resume</Button>{" "}
          </div>
        </div>
 <Modal
        style={{ opacity: 1 }}
        isOpen={resume}
        onRequestClose={() => setResume(false)}
      >
        <div className="viewResume">
         <>
          <div class="popup">


<div class="education">
  <h1> Education </h1>
  <div class="school">
    <h2>Louisiana State University(Baton Rouge, LA)</h2>
    <ul>
      <li>Full Stack Development Bootcamp </li>
      <li>Certificate of Completion received July 2021 (26 Week Program)</li>
    </ul>
   </div>
  <div class="school">
    <h2>ITT Technical Institute(Baton Rouge, LA)</h2>
    <ul>
      <li>Associates Degree: Information Technology: Network Systems Administration</li>
      <li>GPA: 3.69</li>
      <li>Member of the National Technical Honors Society</li>
    </ul>
   </div>
   <div class="school">
    <h2>Assumption High School(Napoleonville, LA)</h2>
    <ul>
      <li>High School Diploma received 2010 </li>
      <li>GPA: 3.1</li>
      <li>Member of Assumption High Computer Club </li>
     </ul>
   </div>
</div>
<div class="workhistory">
  <h1> Employment History</h1>
  <div class="job">
    <h3 id="company">eQ Health Solutions(Baton Rouge, LA)</h3>
    <ul>
      <li>IT Support Tech (March 2014-June 2015)</li>
      <li>Quality Assurance Analyst (June 2015-August 2019)</li>
      <li>IT Support Level II (September 2018-August 2019)</li>
    </ul>
  </div>
  <div class="job">
      <h3 id="company">Baton Rouge General Medical Center(Baton Rouge, LA)</h3>
        <ul>
      <li>Systems Analyst (August 2019 – January 2021)</li>

    </ul>
    </div>
     <div class="job">
      <h3 id="company">Paperless Environments(Baton Rouge, LA)</h3>
        <ul>
      <li>Technical Support Rep (January 2021 – Present)</li>
    </ul>
   </div>
</div>
<div class="skills">
<h1> Technical Skills/Knowledge</h1>
  <ul>
    <li>VMware/Virtual Images</li>
    <li>Remote Desktop</li>
    <li>Microsoft Office Suite</li>
    <li>Windows XP, 7, 8,10/ Windows Server/Active Directory</li>
    <li>Relational Databases</li>
    <li>jQuery, JavaScript, Ajax, Rest APIs, HTML, CSS, Nodejs, Postgres, My SQL, SQL, ReactJS</li>
    <li>GitHub, Visual Studio Code</li>
  </ul>
  
</div>
<div class="pagination">
    <button class="previous" onClick={previousBtn}>Previous</button>
    <ul><span>
      <li class="page1" onClick={viewEducation}><span>1</span></li>
      <li class="page2" onClick={viewHistory}><span>2</span></li>
      <li class="page3" onClick={viewSkills}><span>3</span></li>
      </span></ul>
    <button class="next" onClick={nextBtn}>Next</button>
  </div> 
  
</div>
          </>
        </div>
      </Modal>
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
              <Card.Title style={{ fontSize: "25px" }}>Fari</Card.Title>
              <Card.Text style={{ fontSize: "22px" }}>
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
              <Card.Title style={{ fontSize: "25px" }}>Dirty Keto</Card.Title>
              <Card.Text style={{ fontSize: "22px" }}>
                Guide to a pleasing Keto diet without giving up your favorite
                meals.
              </Card.Text>
              <Button variant="primary">
                <a href="https://dirtyketo-go.netlify.app/" target="_blank">Visit Dirty Keto</a>
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              src="https://image.pngaaa.com/497/242497-middle.png"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>Spotify</Card.Title>
              <Card.Text style={{ fontSize: "22px" }}>
                Spotify API Project, check out some of your favorite jams, on our custom app. 
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
              <Card.Title style={{ fontSize: "25px" }}>The Times</Card.Title>
              <Card.Text style={{ fontSize: "22px" }}>
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
          <form class="contact-me" action="https://formsubmit.co/williams_rashon92@yahoo.com" method="POST">
            <input type="text" name="name" placeholder="Your Name" required></input>
            <input type="text" name="email" placeholder="Email" required></input>
            <input type="text" name="subject" placeholder="Subject"></input>
            <textarea name="message" placeholder="Let's Connect" required></textarea>
      <div class="image">
        <div class="linked">
    <i class="fa fa-linkedin"></i>
    <a href="https://www.linkedin.com/in/rashon-williams-26575291" target="_blank">LinkedIn</a>
      </div>
<div class="git">
     <i class="fa fa-github" aria-hidden="true"></i>
    <a href="https://github.com/rashonwill" target="_blank">Github</a>
       </div>
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
