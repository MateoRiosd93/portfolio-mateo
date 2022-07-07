// Styles
import "./mail.css";

const Mail = () => {
  return (
    <div className="container-form-email">
      <div className="container-subject">
        <label className="subject" htmlFor="subject">
          Asunto.
        </label>
        <input className="input-subject" type="text" name="subject" />
      </div>
      <div className="container-message">
        <label className="message" htmlFor="message">
          Mensaje.
        </label>
        <textarea
          className="text-message"
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="container-btn-send">
        <button className="btn-send-mail">Enviar</button>
      </div>
    </div>
  );
};

export default Mail;
