// Styles
import { useState } from "react";
import "./menu.css";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`nav-menu ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Menu;
