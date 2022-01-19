import React from "react";
import Blog from "./Blog";
import "./Blogs.css";
import Fade from "react-reveal/Fade";

const Blogs = () => {
  return (
    <div className="Blogs" id="blogs">
      <div className="container">
        {/* <Fade right> */}
        <h2>Blogs</h2>
        {/* </Fade> */}
        <ul className="category">
          <Fade left>
            <li>All</li>
          </Fade>
          <Fade left>
            <li>News</li>
          </Fade>
          <Fade left>
            <li>Technology</li>
          </Fade>
          <Fade left>
            <li>Study</li>
          </Fade>
          <Fade left>
            <li>Internatinal</li>
          </Fade>
          <Fade right>
            <li>Sports</li>
          </Fade>
          <Fade right>
            <li>Progrramming</li>
          </Fade>
          <Fade right>
            <li>Error</li>
          </Fade>
          <Fade right>
            <li>Blog</li>
          </Fade>
        </ul>
        <div className="blogs_wrapper">
          <Fade bottom>
            <Blog />
          </Fade>
          <Fade bottom>
            <Blog />
          </Fade>
          <Fade bottom>
            <Blog />
          </Fade>
          <Fade bottom>
            <Blog />
          </Fade>
          <Fade bottom>
            <Blog />
          </Fade>
          <Fade bottom>
            <Blog />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
