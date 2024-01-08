import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profil.css";
import profilPic from "../../assets/Profil/profil_pic.jpg";

function Profil() {
  const [matricule, setMatricule] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [anciennete, setAnciennete] = useState("");

  const handleMatriculeChange = (event) => {
    setMatricule(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };

  const handleAncienneteChange = (event) => {
    setAnciennete(event.target.value);
  };

  const [motivationText, setMotivationText] = useState("");

  const handleMotivationChange = (event) => {
    setMotivationText(event.target.value);
  };

  return (
    <div className="profil">
      <div className="img_btn">
        <img className="profilpic" src={profilPic} alt="profilpic" />
        <p className="user_name">Rudy Martin</p>
        <Link to="/profil" className="btn_profil">
          Profil
        </Link>
      </div>

      <Link to="/profilmodif" className="btn_modif">
        Modifier
      </Link>
      <div className="modify">
        <p className="info_display_heading">Image</p>
        <p className="info_display_heading">Matricule:</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="2347"
          value={matricule}
          onChange={handleMatriculeChange}
          readOnly
        />
        <p className="info_display_heading">Email:</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="rudy.ruru@example.fr"
          value={email}
          onChange={handleEmailChange}
          readOnly
        />
        <p className="info_display_heading">Mot de passe</p>
        <p className="info_display_heading">Téléphone:</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="06.07.08.09.10"
          value={telephone}
          onChange={handleTelephoneChange}
          readOnly
        />
        <p className="info_display_heading">Ancienneté:</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="7 ans"
          value={anciennete}
          onChange={handleAncienneteChange}
          readOnly
        />
        <Link to="/" className="logout_btn">
          <p>Log out</p>
        </Link>
      </div>

      <div className="bloc_motiv">
        <section>
          <div>
            <h2 className="heading">Soft Skills</h2>
            <ul className="check-list">
              <li>Humour</li>
              <li>Autonomie</li>
              <li>Réactivité</li>
              <li>flexibilité</li>
              <li>Adaptabilité</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h2 className="heading">Hard Skills</h2>
            <ul className="check-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>ReactJS</li>
            </ul>
          </div>
        </section>

        <h2 className="motivation_heading">Motivation</h2>
        <textarea
          className="motivation_input"
          rows="15"
          name="message"
          required
          placeholder="Passionné par la création digitale, je suis prêt(e) à relever les défis du web avec innovation et expertise technique. Ma volonté : façonner des expériences en ligne exceptionnelles pour chaque utilisateur, une ligne de code à la fois."
          value={motivationText}
          onChange={handleMotivationChange}
          readOnly
        />
      </div>
    </div>
  );
}

export default Profil;
