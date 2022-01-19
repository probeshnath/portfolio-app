import React from "react";
import "./Services.css";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <Fade right>
          <h2 className="page_title">What I Do</h2>
        </Fade>
        <div className="wrapper_service">
          <Fade bottom cascade>
            <div className="single_service">
              <i class="fas fa-magic"></i>
              <h3>Web Design</h3>
              <p>
                I can create any type of website for your business, portfolio,
                company, e-commerce store, blog etc. I provide unique, clean &
                awesome graphical design interface.
              </p>
            </div>
            {/* </Fade>
          <Fade bottom> */}
            <div className="single_service">
              <i class="far fa-file-code"></i>
              <h3>Web Development</h3>
              <p>
                I can create a fully functional online store with any type of
                payment gateway support and add shopping cart functionality into
                you’re existing website.
              </p>
            </div>
            {/* </Fade>
          <Fade bottom> */}
            <div className="single_service">
              <i class="fas fa-bug"></i>
              <h3>Fixing problems</h3>
              <p>
                Website problem & bugs it's a common problem for every website.
                Don't worry about bugs and problems. I can fix any type of
                problems & bugs for any website.
              </p>
            </div>
            {/* </Fade>
          <Fade bottom> */}
            {/* <div className="single_service">
              <i class="fas fa-pencil-ruler"></i>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                eveniet at qui est assumenda eligendi quod natus repellendus,
                magni facere!
              </p>
            </div> */}
            {/* </Fade>
          <Fade bottom> */}
            {/* <div className="single_service">
              <i class="fas fa-pencil-ruler"></i>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                eveniet at qui est assumenda eligendi quod natus repellendus,
                magni facere!
              </p>
            </div> */}
            {/* </Fade>
          <Fade bottom> */}
            {/* <div className="single_service">
              <i class="fas fa-pencil-ruler"></i>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                eveniet at qui est assumenda eligendi quod natus repellendus,
                magni facere!
              </p>
            </div> */}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Services;
