import { Link } from "react-router-dom";

// Components
import MenuHamburger from "../../components/menu/Menu";

// Assets
import logo from "../../assets/app-logo/curriculum-50px.png";

// Styles
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <Link className="container-logo" to="/home">
        <span className="cv">CV</span>
        <img className="logo" src={logo} alt="logo cv" />
      </Link>
      <MenuHamburger></MenuHamburger>
    </div>
  );
};

export default Navbar;
