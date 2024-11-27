import "./header.css";
import BURGER from "../../assets/burger.png";
import { NavLink } from "react-router-dom";
import MobileMenu from "../MobileMenu";
import { useState } from "react";
import Theme from "../Theme";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const hadleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <a className="logo" href="#">
          ION
        </a>
        <nav className="nav">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item">
            About me
          </NavLink>
          <NavLink to="/portfolio" className="nav-item">
            Portfolio
          </NavLink>
          <NavLink to="/services" className="nav-item">
            Services
          </NavLink>
        </nav>
        <div className="btnSwitch">
          <button className="main-btn header-btn">Contact me</button>
          <button onClick={hadleMenu} className="burger">
            <img src={BURGER} />
          </button>
          {menuOpen && <MobileMenu hadleMenu={hadleMenu} />}
          <Theme />
        </div>
      </header>
    </>
  );
};

export default Header;
