import { saveAs } from "file-saver";

// file CV
import MateoCV from "../../assets/curriculum/MateoCV.pdf";

// Styles
import "./about.css";

const About = () => {
  const downloadPDF = () => saveAs(MateoCV, "MateoCV.pdf");

  return (
    <div className="container-about">
      <div className="container-title-about">
        <h1 className="title-about">
          About <span className="line-decoration-about"></span>
        </h1>
        <span className="phrase-about">
          "Cualquier momento es perfecto para aprender algo nuevo."
        </span>
        <span className="author-phrase">Albert Einstein</span>
      </div>
      <div className="container-text-btn">
        <div className="container-text-about">
          <p className="text-about">
            Hola, soy Mateo Rios Diaz ingeniero informatico graduado en el 2020
            en el Politecnico Colombiano Jaime Isaza Cadavid, actualmente me
            desempe;o como desarrollador fullStack en IAS SOTWARE, tengo 3 años
            de experiencia en el mundo laboral.
          </p>
          <p className="text-about">
            Antes de empezar mi vida laboral estuve en diferentes Bootcamps
            relacionados con React - Javascript - HTML - CSS, patrocinados por
            el Politecnico y por Ruta N, los cuales me ayudaron demasiado para
            tener unas buenas bases y fuera mas facil adaptarme a la vida
            laboral.
          </p>
          <p className="text-about">
            Soy una persona a la cual le gusta mucho aprender y estar
            constantmente nutriendose de noticias de desarrollo web, que nos
            permitan ser cada dia mejor en mi rol, he tenido la oportunidad de
            trabajar en diferentes proyectos que me han forjado en diferentes
            aspectos, tanto personales como profesionales, me encanta trabajar
            en equipo, aprender de mis compañeros y que ellos aprendan de mi.
          </p>
        </div>
        <div className="container-btn-cv">
          <button className="btn-download-cv" onClick={downloadPDF}>
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
