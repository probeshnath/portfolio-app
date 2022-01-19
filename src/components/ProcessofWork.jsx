import React from "react";
import "./ProcessofWork.css";
import Fade from "react-reveal/Fade";

const ProcessofWork = () => {
  return (
    <div className="ProcessofWork" id="process">
      <div className="container">
        <Fade right>
          <h2 className="page_title">How Do I Work</h2>
        </Fade>
        <div className="wrapper_process">
          {/* start */}
          <Fade bottom cascade>
            <div className="single_process">
              <div className="left">
                <i class="far fa-comments"></i>
              </div>
              <div className="right">
                <h4>Discussion</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid minus illo itaque obcaecati! Mollitia, natus facere
                  libero aspernatur distinctio reprehenderit.
                </p>
              </div>
            </div>
            {/* </Fade> */}
            {/* end */}
            {/* start */}
            {/* <Fade bottom> */}
            <div className="single_process">
              <div className="left">
                <i class="fas fa-tools"></i>
              </div>
              <div className="right">
                <h4>Planning</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid minus illo itaque obcaecati! Mollitia, natus facere
                  libero aspernatur distinctio reprehenderit.
                </p>
              </div>
            </div>
            {/* </Fade> */}
            {/* end */}
            {/* start */}
            {/* <Fade bottom> */}
            <div className="single_process">
              <div className="left">
                <i class="fas fa-magic"></i>
              </div>
              <div className="right">
                <h4> Design</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid minus illo itaque obcaecati! Mollitia, natus facere
                  libero aspernatur distinctio reprehenderit.
                </p>
              </div>
            </div>
            {/* </Fade> */}
            {/* end */}
            {/* start */}
            {/* <Fade bottom> */}
            <div className="single_process">
              <div className="left">
                <i class="fas fa-laptop-code"></i>
              </div>
              <div className="right">
                <h4>Coding</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid minus illo itaque obcaecati! Mollitia, natus facere
                  libero aspernatur distinctio reprehenderit.
                </p>
              </div>
            </div>
            {/* </Fade> */}
            {/* end */}
            {/* start */}
            {/* <Fade bottom> */}
            <div className="single_process">
              <div className="left">
                <i class="fas fa-truck"></i>
              </div>
              <div className="right">
                <h4>Submit for Review</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid minus illo itaque obcaecati! Mollitia, natus facere
                  libero aspernatur distinctio reprehenderit.
                </p>
              </div>
            </div>
            {/* </Fade> */}
            {/* end */}
            {/* start */}
            {/* <Fade bottom> */}
            <div className="single_process">
              <div className="left">
                <i class="fas fa-user-graduate"></i>
              </div>
              <div className="right">
                <h4>Website Is Ready!</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid minus illo itaque obcaecati! Mollitia, natus facere
                  libero aspernatur distinctio reprehenderit.
                </p>
              </div>
            </div>
          </Fade>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default ProcessofWork;
