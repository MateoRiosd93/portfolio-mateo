import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Components
import About from "./modules/about/About";
import Carrer from "./modules/carrer/Carrer";
import Contact from "./modules/contact/Contact";
import Copyright from "./components/copyright/Copyright";
import Home from "./modules/home/Home";
import Navbar from "./components/navbar/Navbar";
import NoFound from "./modules/no-found/NoFound";
import Skills from "./modules/skills/Skills";

// Styles
import "./app.css";

const App = () => {
  const darkMode = true;
  const { pathname } = useLocation();
  const showCopyright = pathname === "/" || pathname === "/home" ? true : false;

  return (
    <div className={`${darkMode ? "dark-mode" : "white-mode"}`}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
      {!showCopyright && <Copyright />}
    </div>
  );
};

export default App;
