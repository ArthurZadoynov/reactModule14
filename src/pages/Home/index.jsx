import "./home.css";
import ArticleMain from "../../components/ArticleMainStunning Photography by";
import SectionAbout from "../../components/SectionAbout";
import SectionServices from "../../components/SectionServices";
import SectionPortfolio from "../../components/Portfolio";
import SectionFaqs from "../../components/Faqs";

function Home() {
  return (
    <main>
      <ArticleMain />
      <SectionAbout />
      <SectionServices />
      <SectionPortfolio />
      <SectionFaqs />
    </main>
  );
}

export default Home;
