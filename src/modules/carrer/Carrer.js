// Components
import Copyright from "../../components/copyright/Copyright";

// Styles
import "./carrer.css";

const Carrer = () => {
  return (
    <div className="container-carrer">
      <div className="container-title-carrer">
        <h1 className="title-carrer">
          Carrer <span className="line-decoration-carrer"></span>
        </h1>
        <span className="phrase-carrer">Ingeniero Informático.</span>
      </div>
      <div className="container-text-carrer">
        <p className="text-carrer">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ad
          fugit quos corporis animi soluta neque nam voluptatum quibusdam, eaque
          voluptas nemo similique temporibus quaerat assumenda iusto a quam
          ratione.
        </p>
        <p className="text-carrer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          magnam voluptas nisi libero, rerum fugit dolorum. Suscipit deserunt,
          quidem temporibus molestias neque mollitia, officiis repellendus sint
          accusantium ut exercitationem eveniet.
        </p>
      </div>
      <Copyright />
    </div>
  );
};

export default Carrer;
