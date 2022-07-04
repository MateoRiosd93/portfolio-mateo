import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import MenuHamburger from "../../components/menu/Menu";

// Assets
import logo from "../../assets/app-logo/curriculum-50px.png";

// Styles
import "./navbar.css";

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  return (
    <div className="container-navbar">
      <Link
        className="container-logo"
        to="/home"
        onClick={() => setCloseMenu(true)}
      >
        <span className="cv">CV</span>
        <img className="logo" src={logo} alt="logo cv" />
      </Link>
      <MenuHamburger
        isClosed={closeMenu}
        setCloseMenu={setCloseMenu}
      ></MenuHamburger>
    </div>
  );
};

export default Navbar;
