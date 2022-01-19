import React from "react";

const Project = ({ link, image, title }) => {
  return (
    <a href={link} target="_blank">
      <div className="single_Project">
        <div className="imagewillHover">
          <img src={image} alt="" />
        </div>
        <div className="main_part_hover " id="active">
          <h4>{title}</h4>
          <i class="fas fa-link"></i>
        </div>
      </div>
    </a>
  );
};

export default Project;
