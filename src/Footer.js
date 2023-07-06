import React from "react";
import "./Footer.css";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import YouTubeIcon from "@mui/icons-material/YouTube";

import FacebookIcon from '@mui/icons-material/Facebook';
import  InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Footer() {
  
  return (
    <div className="footer">
      {/* icons */}
      <div className="footer__icons">
        <FacebookIcon className="footer__icon" />
        <InstagramIcon className="footer__icon" />
        <TwitterIcon className="footer__icon" />
        <YouTubeIcon className="footer__icon" />
      </div>
      {/* services */}
      <div className="footer__services">
        <div className="footer__services_sub">
          <a href="https://google.com">
            <small>Blogs</small>
          </a>
          <a href="https://google.com">
            <small>Media Centre</small>
          </a>
          <a href="https://google.com">
            <small>Privacy</small>
          </a>
          <a href="https://google.com">
            <small>Contact Us</small>
          </a>
        </div>
        <div className="footer__services_sub">
          <a href="https://google.com">
            <small>Articles </small>
          </a>

          <a href="https://google.com">
            <small> Work</small>
          </a>
          <a href="https://google.com">
            <small>Legal Notices</small>
          </a>
        </div>
        <div className="footer__services_sub">
          <a href="https://google.com">
            <small>Help Centre</small>
          </a>
          <a href="https://google.com">
            <small>Jobs</small>
          </a>
         
        </div>
        <div className="footer__services_sub">
          <a href="https://google.com">
            <small>Gift Cards</small>
          </a>
          <a href="https://google.com">
            <small>Term Of Use</small>
          </a>
          <a href="https://google.com">
            <small>Corporate Information</small>
          </a>
        </div>
      </div>
     
      {/* copyright */}
      <small className="footer__copyright">
        © 1997-2022 Mind Mentor, Inc.
      </small>
      <small className="credits">Created By Rahul kapri</small>
    </div>
  );
}

export default Footer;