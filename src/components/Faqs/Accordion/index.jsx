import "./accordion.css";
import { useState } from "react";
import VectorBottom from "../../../assets/images/vectorBottom.png";
import VectorTop from "../../../assets/images/vectorTop.png";

export const Accordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordStyle">
      <div className="divAsk">
        <div className="ask" onClick={() => setIsOpen(!isOpen)}>
          <h4>{item.ask}</h4>
        </div>
        {isOpen && (
          <div className="que">
            <p>{item.que}</p>
          </div>
        )}
      </div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <button className="btn-click">
          {isOpen ? <img src={VectorTop} /> : <img src={VectorBottom} />}
        </button>
      </div>
    </div>
  );
};
