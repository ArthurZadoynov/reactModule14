import Marquee from "react-fast-marquee";
import "./running-line.css";
import runningLineContent from "../../assets/json/runningLineContent.json";
import RunningLineContent from "./RunnigContent";

const RunningLine = () => {
  return (
    <Marquee speed={30}>
      {runningLineContent.map((item) => (
        <RunningLineContent key={item.id} item={item} />
      ))}
    </Marquee>
  );
};

export default RunningLine;
