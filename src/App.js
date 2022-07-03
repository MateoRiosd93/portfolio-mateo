import { Routes, Route } from "react-router-dom";

// Components
import About from "./components/modules/about/About";
import Carrer from "./components/modules/carrer/Carrer";
import Contact from "./components/modules/contact/Contact";
import Home from "./components/modules/home/Home";
import Navbar from "./components/navbar/Navbar";
import NoFound from "./components/modules/no-found/NoFound";
import Skills from "./components/modules/skills/Skills";

// Styles
import "./app.css";

const App = () => {
  const darkMode = true;

  return (
    <div className={`${darkMode ? "dark-mode" : "white-mode"}`}>
      <Navbar></Navbar>
      <Routes>
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
