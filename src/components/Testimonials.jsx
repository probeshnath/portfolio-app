import React from "react";
import "./Testimonials.css";
import Fade from "react-reveal/Fade";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <Fade right>
          <h2>Testimonials</h2>
        </Fade>
        <div className="test_wrapper">
          <div className="single_test">
            <div className="top_test">
              <Fade right>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzBVW_lHn0P1-DgV58922W2Gn0_Y0wzK_1A&usqp=CAU"
                  alt="probesh"
                />
              </Fade>
              <Fade bottom>
                <h3>James Juffer</h3>
                <p>Full Stack Web Developer</p>
              </Fade>
            </div>
            <div className="bottom_test">
              <Fade right>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem officia ratione enim laborum doloribus voluptas ea
                  sunt alias recusandae quaerat, nulla magnam aliquid cum est
                  temporibus ex libero sequi mollitia.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
