import React from "react";
import "./footer.css";
import faceBookIcon from "../Assets/images/facebook.svg";
import instaIcon from "../Assets/images/instagram.svg";
import linkedinIcon from "../Assets/images/linkedin.svg";
import twitterIcon from "../Assets/images/twitter.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <section>
          <h1>Like &#38; Follow Us At</h1>
          <div>
            <img src={faceBookIcon} alt="faceBookIcon" />
            <img src={instaIcon} alt="instaIcon" />
            <img src={linkedinIcon} alt="linkedinIcon" />
            <img src={twitterIcon} alt="twitterIcon" />
          </div>
        </section>
        <section>
          <h1>For Contact &#38; Feeback</h1>
          <h4>Contact No. : 99999999</h4>
          <h4>Email : Sab.Kuch.@sabkuch.com</h4>
        </section>
      </footer>
    </>
  );
};

export default Footer;
