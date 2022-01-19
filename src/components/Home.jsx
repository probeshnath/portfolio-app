import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DescriptionIcon from "@material-ui/icons/Description";
import "./Contact.scss";

const Home = () => {
  return (
    <div className="home_page" id="home">
      <div className="container">
        <div className="middle_div">
          <div className="home_wrapper typewriter">
            {/* <Fade top> */}
            <h1>I'm Probesh Deb Nath</h1>
            {/* </Fade> */}
            <div>
              <span>Based in Bangladesh. </span>

              {/* <span>Founder of PDN Software. </span> */}

              <span>Full Stack Web Developer.</span>
            </div>
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
          </div>
        </div>

        <a href="#about" className="scroolbar">
          <img src="images/scroll-down (1).gif" alt="scrool bar" />
        </a>
      </div>
    </div>
  );
};

export default Home;
