import React from "react";
import "./Education.css";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <div className="education" id="education">
      <div className="container">
        <div className="wrapper">
          <div className="education_side">
            <Fade right>
              <h2>Education</h2>
            </Fade>
            <div className="education_div">
              <Fade bottom cascade>
                <div className="education_single_div">
                  <div className="education_single_left">
                    <i class="fas fa-book-open"></i>
                  </div>
                  <div className="education_single_right">
                    <div>
                      <h1>
                        Shahjalal University of Science and Techenology,Sylhet
                      </h1>
                      <span>-(2019 - Present)</span>
                    </div>
                    <p>BSS</p>
                    <p>Department of Anthropology</p>
                  </div>
                </div>
                {/* </Fade>
              <Fade bottom> */}
                <div className="education_single_div">
                  <div className="education_single_left">
                    <i class="fas fa-book-open"></i>
                  </div>
                  <div className="education_single_right">
                    <div>
                      <h1>Shahjalal College,Jagannathpur</h1>
                      <span>-(Jun 2017 - Apr 2019)</span>
                    </div>
                    <p>Humanities Group</p>
                    {/* <p>Department of Anthropology</p> */}
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          <div className="experince_side">
            <Fade bottom>
              <h2>Experience</h2>
            </Fade>
            <div className="education_div">
              <Fade bottom cascade>
                <div className="education_single_div">
                  <div className="education_single_left probesh_ex">
                    <i class="fas fa-book-open"></i>
                  </div>
                  <div className="education_single_right ">
                    <div>
                      <h1>PDN-SOFTWARE</h1>
                      <span>-(2019 - Present)</span>
                    </div>
                    <p>Founder</p>
                    <p className="experince_description">
                      • Developing revenue-generating applications at both small
                      and large scales • Providing comprehensive maintenance
                      support • Improving the user interface • Building apps for
                      self-health and helping the nation
                    </p>
                  </div>
                </div>
                {/* </Fade>
              <Fade bottom> */}
                <div className="education_single_div">
                  <div className="education_single_left">
                    <i class="fas fa-book-open"></i>
                  </div>
                  <div className="education_single_right">
                    <div>
                      <h1>Web Designer</h1>
                      <span>-(2020 - Present)</span>
                    </div>
                    <p>Fiverr</p>
                    <p className="experince_description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam, esse. Modi fugiat saepe, cum nobis facere
                      consequatur velit dolores harum iusto necessitatibus
                      minima maxime debitis, magnam eveniet id ex nostrum.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
