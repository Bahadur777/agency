import Button from "../Button/Button";
import "./hero.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FcCallback } from "react-icons/fc";
import { FaSellcast } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-conten">
            <div className="hero-title">
              <h1 className="title-text">efficient thinking with us !</h1>
            </div>
            <div className="hero-middle">
              <div className="middle-left">
              <AiOutlineSafetyCertificate />
              <span>Microsoft gold partner</span>
              </div>
              <div className="middle-right">
              <AiOutlineSafetyCertificate />
              <span>ISO 34243 certified</span>
              </div>
            </div>
            <div className="hr"></div>
            <div className="hero-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut eius vitae odit iste quisquam consequuntur incidunt quas distinctio recusandae officiis beatae, laboriosam error ut quis? Inventore dignissimos repellendus voluptates.</p>
            </div>
            <div className="button-section">
              <Button buttonText="Contact us"/>
            </div>
          </div>
        </div>
      </div>
      <div className="support-section">
        <div className="support-container">
          <div className="support-left">
            <div className="support-left-icons">
            <FcCallback />
            </div>
            <div className="support-left-text">
              <div className="s-title">
                <h1>Support Inquires : </h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
          </div>
          <div className="support-right">
            <div className="support-right-icons">
            <FaSellcast />
            </div>
            <div className="support-right-content">
              <h1>Become a Seller: </h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Hero;
