import React from "react";
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
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <Fade right>
          <h2>Contact Me</h2>
        </Fade>
        <div className="contact_wrapper">
          <Fade bottom cascade>
            <div className="contact_map common_div">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d129386.62258699651!2d91.8558311846242!3d24.900743128214224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1639207124493!5m2!1sen!2sbd"
                width="350"
                height="400"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                title="My Area"
              ></iframe>
            </div>
            {/* </Fade>
          <Fade bottom> */}
            <div className="contact_profile common_div">
              <div className="bottom_side">
                <div className="my-pic">
                  <img src="images/probesh-deb-nath.jpg" alt="" />
                </div>
                <div className="paddingKombe">
                  <PersonIcon className="profile_icon" />
                  <h1>Probesh Deb Nath</h1>
                </div>
                <div>
                  <DescriptionIcon className="profile_icon" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque modi maiores, beatae esse nihil temporibus?
                  </p>
                </div>

                <div>
                  <EmailIcon className="profile_icon" />
                  <p>freelancerprobesh@gmail.com</p>
                </div>
                <div>
                  <LocationOnIcon className="profile_icon" />
                  <p>Sylhet,Bangladesh</p>
                </div>

                <div className="social_icon">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100018341802138"
                  >
                    <FacebookIcon className="facebook" />
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/probeshnath"
                  >
                    <GitHubIcon className="github" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/probeshdeb/"
                  >
                    <InstagramIcon className="instagram" />
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/probesh-deb-nath-782487225/"
                  >
                    <LinkedInIcon className="linkedin" />
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/channel/UCOI9Q9N-ZWHZYq3NFDeRplw"
                  >
                    <YouTubeIcon className="youtube" />
                  </a>
                </div>
              </div>
            </div>
            {/* </Fade>
          <Fade bottom> */}
            <div className="contact_form common_div">
              <input type="text" placeholder="Enter Your Name" required />
              <input type="text" placeholder="Enter Your Subject" required />
              <input type="email" placeholder="Enter Your Email" required />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="What's on your mind...."
              ></textarea>
              <button>Send Message</button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
