import "./topBar.css";
import { CiGlobe } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
  return (
    <div>
      <div className="topBar">
        <div className="topBar-container">
          <div className="topBar-left">
            <div className="topBar-phone">
              <span>Call: </span>
              <span>+9398504839</span>
            </div>
            <div className="topBar-email">
                <span>Email: </span>
              <span>Youraocund@gamil.com</span>
            </div>
            <div className="topBar-location">
              <span>Location: </span>
              <span>United Arab emirates</span>
            </div>
          </div>
          <div className="topBar-right">
            <div className="top-language">
            <CiGlobe />
            <p>Language </p>
            <FaChevronDown />
            </div>
            <div className="top-social">
               <div className="social-left">
                <span>Social media: </span>
               </div>
               <div className="social-right">
               <FaFacebookF />
               <FaXTwitter />
               <FaBehance />
               <FaLinkedinIn />

               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
