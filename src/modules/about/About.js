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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ad
            fugit quos corporis animi soluta neque nam voluptatum quibusdam,
            eaque voluptas nemo similique temporibus quaerat assumenda iusto a
            quam ratione.
          </p>
          <p className="text-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            magnam voluptas nisi libero, rerum fugit dolorum. Suscipit deserunt,
            quidem temporibus molestias neque mollitia, officiis repellendus
            sint accusantium ut exercitationem eveniet.
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
