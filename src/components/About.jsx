import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <Fade right>
          <h2>About Me</h2>
        </Fade>
        <div className="about_wrapper">
          <div className="header_about_me">
            <div className="single_test">
              <div className="top_test">
                <Fade right>
                  <img src="images/probesh-deb-nath.jpg" alt="probesh" />
                </Fade>
                <Fade left>
                  <h3>Probesh Deb Nath</h3>
                  <p>Full Stack Web Developer</p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="about_skills">
            <div className="right_side">
              <Fade bottom>
                <h3>~I'm Probesh Deb Nath~</h3>
              </Fade>
              <Fade bottom>
                <p>
                  Hi i'm Probesh. I'm a Professional Full Stack Web Developer,
                  with 2 years of experience! I'm quick to grab new ideas and
                  concepts to develop creative and attractive Web design and
                  development. I'm much experienced in HTML, CSS, Bootstrap,
                  JAVASCRIPT, SCSS,TALIWIND CSS ,REACT JS,NODE JS ,EXPRESS JS
                  ,MONGODB ,Material-UI ,GIT & GITHUB Also.Your Satisfaction is
                  my first priority.I pride myself on doing quality work and
                  maintain excellent communication.Already I have created 100s
                  of websites for my clients.My goal is to deliver work with
                  honesty and timely.Feel free to Inbox me for your project
                  plan. Thanks
                </p>
              </Fade>
              <Fade bottom>
                <a href="images/Probesh's Resume.pdf" download={"images/Probesh's Resume.pdf"}>
                  Download CV
                </a>
              </Fade>
            </div>
            <div className="silll_progrress">
              <ul className="box">
                <Fade bottom cascade>
                  <li>
                    <h5>HTML</h5>
                    <span className="bar bar5"></span>
                  </li>
                  <li>
                    <h5>CSS & Tailwind Css</h5>
                    <span className="bar bar4"></span>
                  </li>
                  <li>
                    <h5>Javascript (78%)</h5>
                    <span className="bar bar6"></span>
                  </li>
                  <li>
                    <h5>React Js</h5>
                    <span className="bar bar1"></span>
                  </li>
                  {/* </Fade>
                <Fade bottom> */}
                  <li>
                    <h5>Node Js</h5>
                    <span className="bar bar2"></span>
                  </li>
                  {/* </Fade>
                <Fade bottom> */}
                  <li>
                    <h5>MongoDB</h5>
                    <span className="bar bar3"></span>
                  </li>
                  {/* </Fade>
                <Fade bottom> */}

                  {/* </Fade>
                <Fade bottom> */}

                  {/* </Fade>
                <Fade bottom> */}
                </Fade>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
