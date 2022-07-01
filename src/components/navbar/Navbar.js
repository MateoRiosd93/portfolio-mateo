// Components
import Menu from "../menu/Menu";

// Styles
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="container-logo">
        <img className="logo" src="" alt="" />
        <span className="cv">CV</span>
      </div>
      <Menu></Menu>
    </div>
  );
};

export default Navbar;
