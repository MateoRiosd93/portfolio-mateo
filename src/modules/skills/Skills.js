// Components
import Copyright from "../../components/copyright/Copyright";

// Data - Skills Cards
import { SKILLS as data } from "../../data/skills-data";

// Styles
import "./skills.css";

const Skills = () => {
  const skills = data.map(({ name, imageURL }, index) => (
    <div className="card" key={index}>
      <span className="name-card">{name}</span>
      <img className="image-card" src={imageURL} alt={name} />
    </div>
  ));

  return (
    <div className="container-skills">
      <div className="container-title-skills">
        <h1 className="title-skills">
          Skills <span className="line-decoration-skills"></span>
        </h1>
        <span className="phrase-skills">Experiencia trabajando con.</span>
      </div>
      <div className="container-cards">{skills}</div>
      <Copyright />
    </div>
  );
};

export default Skills;
