import { Routes, Route } from "react-router-dom";

// Components
import About from "./modules/about/About";
import Carrer from "./modules/carrer/Carrer";
import Contact from "./modules/contact/Contact";
import Home from "./modules/home/Home";
import Navbar from "./components/navbar/Navbar";
import NoFound from "./modules/no-found/NoFound";
import Skills from "./modules/skills/Skills";

// Styles
import "./app.css";

const App = () => {
  const darkMode = true;

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
    </div>
  );
};

export default App;
