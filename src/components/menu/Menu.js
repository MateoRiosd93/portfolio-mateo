import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "./menu.css";

const MenuHamburger = ({ isClosed, setCloseMenu }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isClosed) {
      setIsActive(false);
      setCloseMenu(false);
    }
  }, [isClosed, setCloseMenu]);

  return (
    <div className="container-nav">
      <div
        className={`nav-menu ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-menu-modules ${isActive ? "active" : ""}`}>
        <Link
          className="item-nav"
          to="/home"
          onClick={() => setIsActive(false)}
        >
          HOME
        </Link>
        <Link
          className="item-nav"
          to="/about"
          onClick={() => setIsActive(false)}
        >
          ABOUT
        </Link>
        <Link
          className="item-nav"
          to="/carrer"
          onClick={() => setIsActive(false)}
        >
          CARRER
        </Link>
        <Link
          className="item-nav"
          to="/skills"
          onClick={() => setIsActive(false)}
        >
          SKILLS
        </Link>
        <Link
          className="item-nav"
          to="/contact"
          onClick={() => setIsActive(false)}
        >
          CONTACT
        </Link>
      </nav>
    </div>
  );
};

export default MenuHamburger;
