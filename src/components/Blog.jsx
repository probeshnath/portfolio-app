import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <a href="http://google.com/" target="_blank" title="This is a blog">
      <div className="single_Blog">
        <div className="image">
          <img src="images/clientbg.jpg" alt="" />
        </div>
        <div className="blog_footer">
          <h4>E-comarce app for usa </h4>

          <div>
            <div>
              <img className="authProfilepic" src="images/probesh.jpg" alt="" />
              <span>Probesh Deb Nath</span>
            </div>
            <span>12 May, 2021</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Blog;
