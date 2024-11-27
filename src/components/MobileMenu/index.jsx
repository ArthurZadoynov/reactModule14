import "./mobile.css";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ handleMenu }) => {
  return (
    <div className="mobile-menu" onClick={handleMenu}>
      <nav className="mobile-menu__nav">
        <NavLink to="/" className="mobile-nav-item">
          Home
        </NavLink>
        <NavLink to="/about" className="mobile-nav-item">
          About
        </NavLink>
        <NavLink to="/portfolio" className="mobile-nav-item">
          Portfolio
        </NavLink>
        <NavLink to="/services" className="mobile-nav-item">
          Services
        </NavLink>
      </nav>
    </div>
  );
};

export default MobileMenu;
