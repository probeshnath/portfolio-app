import React from "react";
import "./Projects.css";
import Project from "./Project";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <Fade right>
          <h2 className="page_title">Projects</h2>
        </Fade>
        <ul className="category">
          <Fade right cascade>
            <li>All</li>
            {/* </Fade>
          <Fade right> */}
            <li>React</li>
            {/* </Fade>{" "}
          <Fade right> */}
            <li>Nodejs</li>
            {/* </Fade>
          <Fade right> */}
            <li>Mern stack</li>
            {/* </Fade>
          <Fade right> */}
            <li>Portfolio</li>
            {/* </Fade>
          <Fade right> */}
            <li>E-comarce</li>
            {/* </Fade>{" "}
          <Fade right> */}
            <li>Social Media</li>
            {/* </Fade>{" "}
          <Fade right> */}
            <li>Chat App</li>
            {/* </Fade>{" "}
          <Fade right> */}
            <li>Blog</li>
          </Fade>
        </ul>
        <div className="projects_wrapper">
          <Fade bottom cascade>
            {/*   */}
            <Project
              link="https://clone-reactjs-42dcf.web.app/"
              image="https://res.cloudinary.com/pdn-software/image/upload/v1642424478/portfolion%20images/amazon_fwmen6.jpg"
              title="Amazon-clone-reactjs"
            />
            <Project
              link="https://clone-reactjs-a9b50.web.app/"
              image="https://res.cloudinary.com/pdn-software/image/upload/v1642424537/portfolion%20images/googleclone-reactjs-a9b50.web.app-2022.01.17-18_50_57_xigpek.png"
              title="Google-clone-reactjs"
            />
            <Project
              link="https://blogrprobesh-blogapp.netlify.app/"
              image="https://res.cloudinary.com/pdn-software/image/upload/v1642424471/portfolion%20images/blog_nkbhrq.png"
              title="A Blog Website"
            />
            <Project
              link="https://linkedin-clone-redux-7561d.web.app/"
              image="https://res.cloudinary.com/pdn-software/image/upload/v1642424461/portfolion%20images/instragram_m1o9z3.jpg"
              title="Linkedin-clone-redux"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Projects;
