import { Accordion } from "./Accordion";
import "./faqs.css";
import data from "../../assets/json/data.json";

const SectionFaqs = () => {
  return (
    <section>
      <div className="title-faqs">
        <div>
          <p>FAQ’s</p>
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>
      <div className="accordion-faqs">
        {data.map((item) => (
          <Accordion key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SectionFaqs;
