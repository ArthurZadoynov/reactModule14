import RunningLine from "../Runnig-line";
import "./footer.css";
import BtnArticleSvg from "../../assets/icons/btn-article.svg?react";
import FacebookSvg from "../../assets/icons/facebook.svg?react";
import TwitterSvg from "../../assets/icons/twitter.svg?react";
import InstagramSvg from "../../assets/icons/instagram.svg?react";

const Footer = () => {
  return (
    <footer>
      <div className="runnig-line">
        <RunningLine />
      </div>
      <div className="footerContent">
        <div className="leftContent">
          <p>A more meaningful home for photography</p>
          <div className="letsWork">
            <h2>Let’s</h2>
            <button className="btnLetsWork">
              <BtnArticleSvg />
            </button>
          </div>
          <h2>Work Together</h2>
        </div>
        <div className="rightContent">
          <div>
            Home
            <p>About Me</p>
            <p>My Works</p>
            <p>Testimonials</p>
          </div>
          <div>
            Clients
            <p>Klovesto</p>
            <p>Nukeway</p>
            <p>Cloven’s</p>
            <p>MenVol</p>
          </div>
          <div>
            Portfolio
            <p>Events</p>
            <p>Portrait</p>
            <p>Branding</p>
            <p>Commerciale</p>
            <p>Wedding</p>
          </div>
          <div>
            Services
            <p>Portraits</p>
            <p>Events</p>
            <p>Commercial </p>
          </div>
        </div>
      </div>
      <div className="bottomContent">
        <div className="textLeft">
          Terms & Conditions <p>Privacy Policy</p>
        </div>
        <div className="btn-Mesengers">
          <button>
            <FacebookSvg />
          </button>
          <button>
            <TwitterSvg />
          </button>
          <button>
            <InstagramSvg />
          </button>
        </div>
        <p>© 2024 ION Braun Photography. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
