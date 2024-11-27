import "./article.css";
import ArticleSvg from "../../assets/icons/article.svg?react";
import BtnArticleSvg from "../../assets/icons/btn-article.svg?react";
import RunningLine from "../../components/Runnig-line";
import ColourImg from "../../assets/images/colour.png";
import WhiteImg from "../../assets/images/white.png";
import StillifeImg from "../../assets/images/stillife.png";
import EventImg from "../../assets/images/event.png";
import BeautyImg from "../../assets/images/beauty.png";
import Razrez from "../../assets/images/RAZREZ.png";

const ArticleMain = () => {
  return (
    <article>
      <div className="article-top">
        <div className="left-content">
          <p>Stunning Photography by</p>
          <h1>Ion Berindan</h1>
        </div>
        <div className="article-svg">
          <ArticleSvg />
        </div>
        <div className="right-content">
          <div className="lets-work">
            <h2>Let’s</h2>
            <button className="btn-lets-work">
              <BtnArticleSvg />
            </button>
          </div>
          <h2>Work Together</h2>
        </div>
      </div>
      <div className="article-bottom">
        <div className="runnig-line">
          <RunningLine />
        </div>
        <div className="imageAll">
          <img className="ColourImg" src={ColourImg} />
          <img className="WhiteImg" src={WhiteImg} />
          <img className="StillifeImg" src={StillifeImg} />
          <img className="Razrez" src={Razrez} />
          <img className="EventImg" src={EventImg} />
          <img className="BeautyImg" src={BeautyImg} />
        </div>
      </div>
    </article>
  );
};

export default ArticleMain;
