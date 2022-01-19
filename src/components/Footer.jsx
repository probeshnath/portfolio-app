import React from "react";
import "./Footer.css";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <Fade bottom>
            <div className="upLink">
              <a href="#home" title="Back to Top">
                <i class="fas fa-chevron-up"></i>
              </a>
            </div>
          </Fade>
          <div className="social_icon_link">
            <ul>
              <Fade left>
                <li>
                  <a href="https://www.youtube.com/channel/UCOI9Q9N-ZWHZYq3NFDeRplw">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </Fade>
              <Fade left>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100018341802138">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
              </Fade>
              <Fade bottom>
                <li>
                  <a href="https://www.linkedin.com/in/probesh-deb-nath-782487225/">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </Fade>
              <Fade right>
                <li>
                  <a href="https://www.instagram.com/probeshdeb/">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </Fade>
              <Fade right>
                <li>
                  <a href="https://github.com/probeshnath">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
              </Fade>
            </ul>
          </div>
          <Fade bottom>
            <p className="legalty">
              Made by <span>Probesh Deb Nath</span>
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Footer;
