import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./style sheets/index.css";

const projects = [
  {
    id: 1,
    title: "Three28",
    category: "webapp",
    description: "Subscription-based video sharing platform with marketplace for content creators.",
    image: "https://d2v76lnwus9o6a.cloudfront.net/1701361356911_Social_Profile_Facebook.jpg",
    url: "https://three28.app/",
    cta: "Visit Three28",
  },
  {
    id: 2,
    title: "Dirty Keto",
    category: "webapp",
    description: "Keto-centered restaurant site with cart functionality and PayPal sandbox checkout.",
    image: "https://faribucket.s3.amazonaws.com/1630504972517_large%20pizza.jpeg",
    url: "https://dirtyketo-go.netlify.app/",
    cta: "Visit Dirty Keto",
  },
  {
    id: 3,
    title: "Sneaker Head",
    category: "webapp",
    description: "eCommerce apparel store for sneakers and fashion. Stay Fresh. Stay Crisp.",
    image: "https://ih1.redbubble.net/image.1028635848.2482/st,small,507x507-pad,600x600,f8f8f8.jpg",
    url: "https://sneakerhead22.herokuapp.com/",
    cta: "Visit Sneaker Head",
  },
  {
    id: 4,
    title: "Todos",
    category: "miniapp",
    description: "Clean, minimalist daily task tracker to keep you organized and on track.",
    image: "https://faribucket.s3.amazonaws.com/My+project-1+(36).png",
    url: "https://rashonwill.github.io/todo_webapplication/",
    cta: "View Todo App",
  },
  {
    id: 5,
    title: "Calculator",
    category: "miniapp",
    description: "Sleek math calculator with a clean UI and full arithmetic operations.",
    image: "https://fari-prod-hls-069544520198.s3.amazonaws.com/math-education-illustration.jpeg",
    url: "https://coolcalculator.netlify.app/",
    cta: "View Calculator",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery", "GSAP"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MySQL", "REST APIs", "JWT", "WebSockets"],
  },
  {
    category: "Tools & Cloud",
    items: ["GitHub", "VS Code", "AWS S3", "Heroku", "Netlify", "Nodemailer"],
  },
  {
    category: "IT & Systems",
    items: ["VMware", "Active Directory", "Windows Server", "Remote Desktop"],
  },
];

const timeline = [
  {
    year: "2021 – Present",
    title: "Technical Support Rep",
    company: "Paperless Environments",
    location: "Baton Rouge, LA",
  },
  {
    year: "2019 – 2021",
    title: "Systems Analyst",
    company: "Baton Rouge General Medical Center",
    location: "Baton Rouge, LA",
  },
  {
    year: "2018 – 2019",
    title: "IT Support Level II",
    company: "eQ Health Solutions",
    location: "Baton Rouge, LA",
  },
  {
    year: "2015 – 2019",
    title: "Quality Assurance Analyst",
    company: "eQ Health Solutions",
    location: "Baton Rouge, LA",
  },
  {
    year: "2014 – 2015",
    title: "IT Support Tech",
    company: "eQ Health Solutions",
    location: "Baton Rouge, LA",
  },
];

const education = [
  {
    year: "2021",
    title: "Full Stack Development Certificate",
    school: "Louisiana State University",
    detail: "26-Week Bootcamp · Baton Rouge, LA",
  },
  {
    year: "2014",
    title: "A.A.S. Information Technology",
    school: "ITT Technical Institute",
    detail: "Network Systems Administration · GPA 3.69",
  },
  {
    year: "2010",
    title: "High School Diploma",
    school: "Assumption High School",
    detail: "Napoleonville, LA · GPA 3.1",
  },
];

const NAV_LINKS = ["Home", "About", "Portfolio", "Resume", "Contact"];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const refMap = {
    Home: heroRef,
    About: aboutRef,
    Portfolio: portfolioRef,
    Resume: resumeRef,
    Contact: contactRef,
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowScrollUp(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <div className="nav__brand" onClick={() => scrollTo(heroRef)}>
          R<span>W</span>
        </div>

        <ul className={`nav__links${menuOpen ? " nav__links--open" : ""}`}>
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <button onClick={() => scrollTo(refMap[label])}>{label}</button>
            </li>
          ))}
        </ul>

        <button
          className={`nav__burger${menuOpen ? " nav__burger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__grid" />
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">Full Stack Developer</p>
          <h1 className="hero__name">
            <span className="hero__name-first">Rashon</span>
            <span className="hero__name-last">Williams</span>
          </h1>
          <p className="hero__tagline">
            Building elegant, performant web experiences — from concept to deployment.
          </p>
          <div className="hero__ctas">
            <button
              className="btn btn--primary"
              onClick={() => scrollTo(portfolioRef)}
            >
              View Portfolio
            </button>
            <a
              className="btn btn--outline"
              href="/IT Resume Nov. 2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>

        <button
          className="hero__scroll-indicator"
          onClick={() => scrollTo(aboutRef)}
          aria-label="Scroll to about"
        >
          <span />
        </button>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" ref={aboutRef}>
        <div className="section__inner">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            The Mind <span className="accent">Behind</span> the Code
          </h2>

          <div className="about__grid">
            <div className="about__bio">
              <p>
                With 9+ years in IT — spanning software support, quality assurance, systems
                analysis, and technical support — I bring a rare mix of deep operational
                knowledge and hands-on development skill.
              </p>
              <p>
                After completing LSU's Full Stack Development Bootcamp, I've been building
                web applications that merge clean design with solid engineering. I'm actively
                looking to transition into a full-time development role.
              </p>
              <div className="about__stats">
                <div className="stat">
                  <span className="stat__num">9+</span>
                  <span className="stat__label">Years in IT</span>
                </div>
                <div className="stat">
                  <span className="stat__num">5+</span>
                  <span className="stat__label">Projects Built</span>
                </div>
                <div className="stat">
                  <span className="stat__num">2</span>
                  <span className="stat__label">Degrees / Certs</span>
                </div>
              </div>
            </div>

            <div className="about__visual">
              <div className="cube-wrap">
                <div className="cube-scene">
                  <div id="cube">
                    <div className="face front">
                      <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/javascript-logo.png"
                        alt="JavaScript"
                      />
                    </div>
                    <div className="face back">
                      <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/react-native.png"
                        alt="React"
                      />
                    </div>
                    <div className="face right">
                      <img
                        src="https://img.icons8.com/metro/50/ffffff/sql.png"
                        alt="SQL"
                      />
                    </div>
                    <div className="face left">
                      <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/heroku.png"
                        alt="Heroku"
                      />
                    </div>
                    <div className="face top">
                      <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/css-filetype.png"
                        alt="CSS"
                      />
                    </div>
                    <div className="face bottom">
                      <img
                        src="https://img.icons8.com/windows/32/ffffff/nodejs.png"
                        alt="Node.js"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills-grid">
                {skillGroups.map(({ category, items }) => (
                  <div key={category} className="skill-group">
                    <h4 className="skill-group__title">{category}</h4>
                    <div className="skill-group__tags">
                      {items.map((item) => (
                        <span key={item} className="skill-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="portfolio" ref={portfolioRef}>
        <div className="section__inner">
          <p className="section-label">My Work</p>
          <h2 className="section-title">
            Portfolio <span className="accent">Gallery</span>
          </h2>

          <div className="portfolio__filters">
            {[
              ["all", "All"],
              ["webapp", "Web Apps"],
              ["miniapp", "Mini Apps"],
            ].map(([val, label]) => (
              <button
                key={val}
                className={`filter-btn${
                  activeFilter === val ? " filter-btn--active" : ""
                }`}
                onClick={() => setActiveFilter(val)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="portfolio__grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-card__img-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__img"
                  />
                  <div className="project-card__overlay">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__desc">{project.description}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--sm btn--primary"
                    >
                      {project.cta} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME ── */}
      <section className="resume-section" ref={resumeRef}>
        <div className="section__inner">
          <p className="section-label">Career</p>
          <h2 className="section-title">
            Resume &amp; <span className="accent">Experience</span>
          </h2>

          <div className="resume-grid">
            <div className="resume-col">
              <h3 className="resume-col__heading">
                <span className="resume-col__bar" />
                Employment History
              </h3>
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-item__year">{item.year}</div>
                  <div className="timeline-item__title">{item.title}</div>
                  <div className="timeline-item__sub">
                    {item.company} · {item.location}
                  </div>
                </div>
              ))}
            </div>

            <div className="resume-col">
              <h3 className="resume-col__heading">
                <span className="resume-col__bar" />
                Education
              </h3>
              {education.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-item__year">{item.year}</div>
                  <div className="timeline-item__title">{item.title}</div>
                  <div className="timeline-item__sub">
                    {item.school} · {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-cta">
            <a
              className="btn btn--primary"
              href="/IT Resume Nov. 2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Full Resume →
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" ref={contactRef}>
        <div className="section__inner">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Contact <span className="accent">Me</span>
          </h2>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>
                Let's Build Something <span className="accent">Great</span>
              </h3>
              <p>
                Open to freelance projects, full-time roles, and collaboration
                opportunities. Whether you have a project in mind or just want to
                connect — I'd love to hear from you.
              </p>

              <div className="contact-detail">
                <span className="contact-detail__icon">✉</span>
                <a href="mailto:williams_rashon92@yahoo.com">
                  williams_rashon92@yahoo.com
                </a>
              </div>

              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/in/rashon-williams-26575291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/rashonwill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/williams_rashon92@yahoo.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Portfolio Contact" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                />
              </div>

              <button type="submit" className="btn btn--primary btn--full">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">RASHON WILLIAMS</div>
          <p className="footer__tagline">Full Stack Developer · Baton Rouge, LA</p>
          <nav className="footer__nav">
            {NAV_LINKS.map((label) => (
              <button key={label} onClick={() => scrollTo(refMap[label])}>
                {label}
              </button>
            ))}
          </nav>
          <p className="footer__copy">
            © {new Date().getFullYear()} Rashon Williams. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── SCROLL UP ── */}
      {showScrollUp && (
        <button
          className="scroll-up-btn"
          onClick={() => scrollTo(heroRef)}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
