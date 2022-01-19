import React from "react";
import "./Count.css";

const Count = () => {
  return (
    <div className="wrapperCount" id="count">
      <div className="container">
        <div className="wrapper_count">
          <div className="count-1">
            <div>
              <img src="images/fire.png" alt="" />
              <span>100+</span>
            </div>
            <p>Project Completed</p>
          </div>

          <div className="count-1">
            <div>
              <img src="images/coffe.png" alt="" />
              <span>1404+</span>
            </div>
            <p>Cup of Coffe</p>
          </div>
          <div className="count-1">
            <div>
              <img src="images/user.png" alt="" />
              <span>50+</span>
            </div>
            <p>Satisfied Client</p>
          </div>
          <div className="count-1">
            <div>
              <img src="images/medal-solid.svg" alt="" />
              <span>5+</span>
            </div>
            <p>Award Won</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
