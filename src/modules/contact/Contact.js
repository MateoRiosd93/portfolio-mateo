// Components
import Copyright from "../../components/copyright/Copyright";

// Styles
import "./contact.css";

const Contact = () => {
  return (
    <div className="container-contact">
      <div className="container-title-contact">
        <h1 className="title-contact">
          Contact <span className="line-decoration-contact"></span>
        </h1>
        <span className="phrase-skills">Envíame un mensaje.</span>
      </div>
      <div>
        <h2>Por donde contactarme</h2>
      </div>
      <Copyright />
    </div>
  );
};

export default Contact;
