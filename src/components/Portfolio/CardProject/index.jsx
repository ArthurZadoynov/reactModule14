import "./cardProject.css";
import BtnArticleSvg from "../../../assets/icons/btn-article.svg?react";

export const CardProject = ({ item }) => {
  return (
    <div>
      <img className="imgPortfolio" src={item.img} />
      <div className="text-content">
        <div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
        <div className="view">
          <p>
            View Project <BtnArticleSvg />
          </p>
        </div>
      </div>
    </div>
  );
};
