import Button from "../Button/Button";
import "./hero.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

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
    </div>
  );
};

export default Hero;
