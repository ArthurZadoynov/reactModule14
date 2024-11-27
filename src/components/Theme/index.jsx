import { useContext } from "react";
import "./theme.css";
import { ThemeContext } from "../../App";

const Theme = () => {
  const currentTheme = useContext(ThemeContext);
  const handleClick = () => {
    if (currentTheme?.theme === "dark") {
      currentTheme.setTheme("light");
    } else {
      currentTheme?.setTheme("dark");
    }
  };

  return (
    <>
      <input type="checkbox" id="darkmode-toggle" onClick={handleClick} />
      <label htmlFor="darkmode-toggle"></label>
    </>
  );
};

export default Theme;
