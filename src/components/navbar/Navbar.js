// Components
import MenuHamburger from "../modules/menu/Menu";

// Assets
import logo from "../../assets/curriculum-50px.png";

// Styles
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="container-logo">
        <span className="cv">CV</span>
        <img className="logo" src={logo} alt="logo cv" />
      </div>
      <MenuHamburger></MenuHamburger>
    </div>
  );
};

export default Navbar;
