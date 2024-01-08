import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./profilmodif.css";
import profilPic from "../../assets/Profil/profil_pic.jpg";
import modifPen from "../../assets/Profil/modif_pen.svg";
import uploadIcon from "../../assets/Profil/upload_icon.svg";

const softSkillsOptions = [
  { value: "Humour", label: "Humour" },
  { value: "Autonomie", label: "Autonomie" },
  { value: "Réactivité", label: "Réactivité" },
  { value: "Adaptabilité", label: "Adaptabilité" },
  { value: "Flexibilité", label: "Flexibilité" },
];
const hardSkillsOptions = [
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "NodeJS", label: "NodeJS" },
  { value: "ReactJS", label: "ReactJS" },
];

function ProfilModif() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const [softSkills, setSoftSkills] = useState([]);

  const handleSelectSoftSkillChange = (selectedSoftSkillOptions) => {
    setSoftSkills(selectedSoftSkillOptions);
  };
  const [hardSkills, sethardSkills] = useState([]);

  const handleSelectHardSkillChange = (selectedHardSkillOptions) => {
    sethardSkills(selectedHardSkillOptions);
  };

  return (
    <div className="pg_modify">
      <div className="img_btn">
        <img className="profilpic" src={profilPic} alt="profilpic" />
        <p className="user_name">Rudy Martin</p>
        <Link to="/profil" className="btn_profil">
          Profil
        </Link>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <p className="info"> Mot de passe</p>
          <input className="info_input" type="password" placeholder="*******" />
          <input
            className="info_input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Nouveau mot de passe"
          />
        </label>
        <label>
          <p className="info"> Adresse Mail</p>
          <input
            className="info_input"
            type="email"
            placeholder="rudy.ruru@example.fr"
          />
          <input
            className="info_input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Nouveau Adress mail"
          />
        </label>
        <label>
          <p className="info">Téléphone:</p>
          <input
            className="info_input"
            type="tel"
            placeholder="06-XX-XX-XX-XX"
          />
          <input
            className="info_input"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Nouveau numéro"
          />
        </label>
        <label className="img_input">
          <p className="info_img"> IMAGE.</p>
          <img className="upload_icon" src={uploadIcon} alt="uploadIcon" />
          <input
            type="file"
            value={image}
            onChange={handleImageChange}
            accept="image/*"
            hidden
          />
        </label>
      </form>
      <div className="motiv_skills_modif">
        <div className="modif_img_heading">
          <img className="modifPen" src={modifPen} alt="modifPen" />
          <h1 className="skill_modif_heading">Compétences</h1>
        </div>

        <p className="skill_block_heading"> Soft Skills</p>
        <Select
          className="skill_options"
          options={softSkillsOptions}
          value={softSkills}
          onChange={handleSelectSoftSkillChange}
          isMulti
          placeholder="Sélectionnez vos compétences..."
        />
        <p className="skill_block_heading">Hard Skills</p>
        <Select
          className="skill_options"
          options={hardSkillsOptions}
          value={hardSkills}
          onChange={handleSelectHardSkillChange}
          isMulti
          placeholder="Sélectionnez vos compétences..."
        />

        <h1 className="motivation_modif_heading">Motivation</h1>

        <textarea
          className="motivation_input_modif"
          rows="15"
          name="message"
          value={message}
          onChange={handleChange}
          required
          placeholder="Expliquez vos motivation..."
        />
      </div>
      <Link to="/profil" className="btn_save">
        SAUVEGARDER
      </Link>
    </div>
  );
}

export default ProfilModif;
