// Asset
import picture from "../../assets/profile-image/profile-picture.png";

// Style
import "./profile.css";

const Profile = () => {
  const english = true;

  return (
    <div className="container-picture-name">
      <div className="container-picture">
        <img className="picture" src={picture} alt="Profile_picture" />
      </div>
      <h2 className="name-dev gradient-heading">
        {english ? `Hi, I'm Mateo` : `Hola, soy Mateo`}
      </h2>
      <h3 className="profesion-dev gradient-heading">
        {english ? `FullStack Developer` : `Desarrollador FullStack`}
      </h3>
    </div>
  );
};

export default Profile;
