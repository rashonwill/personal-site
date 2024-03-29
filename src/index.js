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
  
  
  class Example extends Component{
    componentDidMount() {
    viewEducation();
    viewHistory();
    viewSkills();
    viewContact();
    nextBtn();
    previousBtn();
    firstPage();
    }
  }
  
  function firstPage(){
  $('.page1').addClass('current-pg');
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
  
  const modalStyle = {
    overlay: {
        backgroundColor: 'transparent',
        border: 'none',
    },
    content: {
        background: 'transparent',
        border: 'none',
    }
};

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
            <h1> Hi, I'm Rashon Williams. Welcome to my Portfolio!

             </h1>
          </div>
        </div>
        <div class="background-pic">
          <img
            class="bg-image"
            src="https://faribucket.s3.amazonaws.com/My+project-1+(41).png"
          ></img>
        </div>
      </div>
      <div class="about-pg" ref={aboutSection}>
        <h1>About</h1>
        <div class="within-about">
          <div class="about-me">
            <p>
              Hello! So, a little about me... I've been an IT professional for
              the past 9 years. I have an Assoicates in Network Adminstration
              and currently looking to start a career in <em>
              Development</em>.
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
            setResume(true); firstPage() }}>Resume</Button>{" "}

          </div>
</div>

<div class ="container">  
  <div id ="cube"> 
    
<div class ="front">
<img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
  </div>
    
 <div class ="back">
<img src="https://img.icons8.com/ios-filled/50/000000/react-native.png"/>
  </div>  
    
 <div class ="right">
<img src="https://img.icons8.com/metro/50/000000/sql.png"/>
  </div>  
    
    
     <div class ="left">
  <img src="https://img.icons8.com/ios-filled/50/000000/heroku.png"/>
  </div>   
    
    
       <div class ="top">
<img src="https://img.icons8.com/ios-filled/50/000000/css-filetype.png"/>
  </div>    
    
    
       <div class ="bottom"> 
<img src="https://img.icons8.com/windows/32/000000/nodejs.png"/>
  </div>

  </div>
  </div>

        </div>
 <Modal
        style={modalStyle}
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
    <li>Frontend Development: AJAX, JSON, HTML, CSS, Javascript, Jquery, ReactJS, Responsive Design, Bootstrap, MaterialUI, FontAwesome, Greensock Animation Library</li>
    <li>Backend Development: Rest APIs, Nodejs, Postgres, MySQL, SSMS, JWT, Express, Nodemailer, AWS S3, Websockets, Heroku  </li>
    <li>Version Control: GitHub, Visual Studio Code</li>
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
      <div class="projects-pg" ref={projectsSection}>
        <h1>Projects</h1>

<h2> Web Applicatons </h2>

        <div class="project-cards">
          <Card style={{ width: "17rem" }}>
            <Card.Img
              variant="top"
              src="https://d2v76lnwus9o6a.cloudfront.net/1701361356911_Social_Profile_Facebook.jpg"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>Three28</Card.Title>
              <Card.Text style={{ fontSize: "22px" }}>
                Subscription based, video sharing platform with marketplace for content creators.
              </Card.Text>
              <Button variant="primary">
                <a href="https://three28.app/" target="_blank">Visit Three28</a>
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "17rem" }}>
            <Card.Img
              variant="top"
              src="https://faribucket.s3.amazonaws.com/1630504972517_large%20pizza.jpeg"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>Dirty Keto</Card.Title>
              <Card.Text style={{ fontSize: "22px" }}>
                Keto centered restaurant website with cart functionality and Paypal sandbox checkout. 
              </Card.Text>
              <Button variant="primary">
                <a href="https://dirtyketo-go.netlify.app/" target="_blank">Visit Dirty Keto</a>
              </Button>
            </Card.Body>
          </Card>

         <Card style={{ width: "17rem" }}>
            <Card.Img
              variant="top"
              src="https://ih1.redbubble.net/image.1028635848.2482/st,small,507x507-pad,600x600,f8f8f8.jpg"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>Sneaker Head</Card.Title>
              <Card.Text style={{ fontSize: "22px" }}>
                Hottest eCommerce apparel store, for your apparel needs. Stay Fresh. Stay Crisp. Sneaker Head.
              </Card.Text>
              <Button variant="primary">
                <a href="https://sneakerhead22.herokuapp.com/" target="_blank">Visit Sneaker Head</a>
              </Button>
            </Card.Body>
          </Card>

        
        </div>

<div class="mobile-apps">
         <Card style={{ width: "17rem" }}>
            <Card.Img
              variant="top"
              src="https://faribucket.s3.amazonaws.com/My+project-1+(36).png"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>Todos</Card.Title>
              <Card.Text style={{ fontSize: "22px" }}>
                Keep track of your daily task!
              </Card.Text>
              <Button variant="primary">
                <a href="https://rashonwill.github.io/todo_webapplication/" target="_blank">View Todo App</a>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "17rem" }}>
            <Card.Img
              variant="top"
              src="https://fari-prod-hls-069544520198.s3.amazonaws.com/math-education-illustration.jpeg"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>Calculator</Card.Title>
              <Card.Text style={{ fontSize: "22px" }}>
                Math Calculator
              </Card.Text>
              <Button variant="primary">
                <a href="https://coolcalculator.netlify.app/" target="_blank">View Calculator</a>
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
    <a href="https://www.linkedin.com/in/rashon-williams-26575291" target="_blank"><i class="fa fa-linkedin"></i></a>
    <a href="https://www.linkedin.com/in/rashon-williams-26575291" target="_blank">LinkedIn</a>
      </div>
<div class="git">
     <a href="https://github.com/rashonwill" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
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
