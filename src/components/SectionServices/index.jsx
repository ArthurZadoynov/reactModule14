import "./sectionServices.css";
import BtnArticleSvg from "../../assets/icons/btn-article.svg?react";
import PREVSvg from "../../assets/icons/prev.svg?react";
import NEXTSvg from "../../assets/icons/next.svg?react";
import serviceHighlights from "../../assets/json/serviceHighlights.json";
import ServiceHighlights from "./ServiceItems";
import ServiceImg from "../../assets/service.png";

const SectionServices = () => {
  return (
    <>
      <section>
        <div className="title-services">
          <div>
            <p>Services</p>
            <h2>My Photography Services</h2>
          </div>
          <div className="btn-prev-next">
            <div className="btn-prev-next-svg">
              <button>
                <PREVSvg />
              </button>
              <button>
                <NEXTSvg />
              </button>
            </div>
            <button className="btnAllServices">
              View All Services &#8594;
            </button>
          </div>
        </div>
        <div className="service-content">
          <div className="content-left">
            <div className="content-events">
              <div className="title-events">
                <h3>Events</h3>
                <button className="btn-lets-work">
                  <BtnArticleSvg />
                </button>
              </div>
              <p>
                We offer small to large-scale production and production
                coordination in studio or on location for editorials, campaigns
                and advertising photography shoots for fashion, beauty,
                swimwear, lifestyle and travel in stills and moving image, for
                digital content creation and outdoor printing.
              </p>
            </div>
            <div>
              <h4>Service Highlights</h4>
              <div className="Service-Highlights">
                {serviceHighlights.map((item) => (
                  <ServiceHighlights key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <img className="serviceImg" src={ServiceImg} />
        </div>
      </section>
    </>
  );
};

export default SectionServices;
