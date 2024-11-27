import "./portfolio.css";
import PREVSvg from "../../assets/icons/prev.svg?react";
import NEXTSvg from "../../assets/icons/next.svg?react";
import project from "../../assets/json/project.json";
import { CardProject } from "./CardProject";

const SectionPortfolio = () => {
  return (
    <section>
      <div className="title-portfolio">
        <div>
          <p>Portfolio</p>
          <h2>Explore My photography work.</h2>
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
          <button className="btnAllWorks">View All Works &#8594;</button>
        </div>
      </div>
      <div className="portfolio-content">
        {project.map((item) => (
          <CardProject key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SectionPortfolio;
