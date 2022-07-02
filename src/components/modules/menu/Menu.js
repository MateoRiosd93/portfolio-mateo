import { useState } from "react";

// Styles
import "./menu.css";

const MenuHamburger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div
        className={`nav-menu ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav_menu ${isActive ? "active" : ""}`}>
        <a
          className="item-nav"
          href="http://localhost:3000/"
          onClick={() => setIsActive(false)}
        >
          HOME
        </a>
        <a
          className="item-nav"
          href="http://localhost:3000/"
          onClick={() => setIsActive(false)}
        >
          ABOUT
        </a>
        <a
          className="item-nav"
          href="http://localhost:3000/"
          onClick={() => setIsActive(false)}
        >
          CARRER
        </a>
        <a
          className="item-nav"
          href="http://localhost:3000/"
          onClick={() => setIsActive(false)}
        >
          SKILLS
        </a>
        <a
          className="item-nav"
          href="http://localhost:3000/"
          onClick={() => setIsActive(false)}
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default MenuHamburger;
