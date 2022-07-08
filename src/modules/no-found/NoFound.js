import { Link } from "react-router-dom";

// Assets
import noFound from "../../assets/no-found/not-found.png";

// Styles
import "./noFound.css";

const NoFound = () => {
  return (
    <div className="container-no-found">
      <div className="container-title-no-found">
        <h1 className="title-no-found">
          404 Not found <span className="line-decoration-no-found"></span>
        </h1>
        <span className="phrase-no-found">
          Lo sentimos, la página que buscas no existe.
        </span>
      </div>
      <div className="container-img-no-found">
        <img className="no-found-img" src={noFound} alt="Not-found" />
      </div>
      <div className="container-btn-no-found">
        <Link to="/" className="btn-back-home">
          Regresar al inicio
        </Link>
      </div>
    </div>
  );
};

export default NoFound;
