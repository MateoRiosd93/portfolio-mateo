// Components
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Social from "./components/social/Social";

// Styles
import "./app.css";

const App = () => {
  const darkMode = true;

  return (
    <div className={`${darkMode ? "dark-mode" : "white-mode"}`}>
      <Navbar></Navbar>
      <Profile></Profile>
      <Social></Social>
    </div>
  );
};

export default App;
