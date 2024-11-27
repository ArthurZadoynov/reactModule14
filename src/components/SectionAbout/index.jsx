import "./sectionAbout.css";
import IntroductionSvg from "../../assets/icons/introduction.svg?react";
import FacebookSvg from "../../assets/icons/facebook.svg?react";
import TwitterSvg from "../../assets/icons/twitter.svg?react";
import InstagramSvg from "../../assets/icons/instagram.svg?react";
import ION from "../../assets/ion.png";

const SectionAbout = () => {
  return (
    <>
      <section>
        <div className="title-about">
          <div>
            <p>About</p>
            <h2>I am Ion</h2>
          </div>
          <button>Know More &#8594;</button>
        </div>
        <div className="about-content">
          <img src={ION} />
          <div className="content-right">
            <div className="content-Introduction">
              <div className="title-Introduction">
                <IntroductionSvg />
                <h3>Introduction</h3>
              </div>
              <p>
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the worlds beauty as I see it.
                Based in the enchanting landscapes of the Russia, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>
            <div className="Contact-Information">
              <div className="title-Contact-Information">
                <IntroductionSvg />
                <h3>Contact Information</h3>
              </div>
              <div className="Contacts">
                <div className="Contact-email">
                  <h4>Email</h4>
                  <p>ion@ionberindan.com</p>
                </div>
                <div className="Contact-Phone">
                  <h4>Phone Number</h4>
                  <p>+00 000000000</p>
                </div>
              </div>
              <div className="Messengers">
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
                <div className="btn-Contacts">
                  <button>Let’s Work</button>
                  <button>Download CV</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionAbout;
