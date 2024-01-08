import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logorf from "../../assets/images/logorf.png";
import logorayj from "../../assets/images/logorayj.png";
import "./inscription.css";

function inscription() {
  const redirect = useNavigate();
  const Firstname = useRef();
  const Lastname = useRef();
  const Email = useRef();
  const Password = useRef();
  const Phone = useRef();
  const Matricule = useRef();
  const [seniority, setSeniority] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Lastname: Lastname.current.value,
            Firstname: Firstname.current.value,
            Martricule: Matricule.current.value,
            Password: Password.current.value,
            Email: Email.current.value,
            Phone: Phone.current.value,
            Seniority: seniority,
            Admin: false,
          }),
        }
      );

      if (response.status === 201) {
        const user = await response.json();
        console.info(user);
        redirect("/");
      } else {
        console.error("veuillez verifier votre saisie.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="inscribody">
      <img className="logorf" src={logorf} alt="logo de la société" />

      <from className="form-inscription">
        <div className="inscription-box">
          <div className="all">
            <input
              className="firstname"
              type="text"
              name="firstname"
              required
              placeholder="Prénom"
              ref={Firstname}
            />

            <input
              className="lastname"
              type="text"
              name="Lastname"
              required
              placeholder="Nom"
              ref={Lastname}
            />

            <input
              className="email"
              type="email"
              name="email"
              id="email"
              required
              placeholder="E-mail"
              ref={Email}
            />
            <input
              className="password"
              type="password"
              name="password"
              id="password"
              required
              placeholder="Mot de passe"
              ref={Password}
            />
            <input
              className="phonenumber"
              type="tel"
              name="phoneNumber"
              placeholder="numéro de téléphone"
              ref={Phone}
            />
            <input
              className="seniority"
              type="number"
              name="matricule"
              placeholder="Votre Matricule"
              ref={Matricule}
            />
            <label htmlFor="start" className="embauche">
              Date d'embauche:
              <input
                className="pickerdate"
                type="date"
                name="start"
                id="start"
                value={seniority}
                onChange={(e) => setSeniority(e.target.value)}
              />
            </label>

            <textarea
              className="introduction"
              rows="25"
              cols="40"
              name="message"
              required
              placeholder="Expliquez vos motivation"
            />
          </div>
        </div>
      </from>
      <div>
        <button className="validation" type="button" onClick={handleSubmit}>
          Valider
        </button>
      </div>
      <div>
        <img className="rayinscrir" src={logorayj} alt="logo société" />
      </div>
    </div>
  );
}

export default inscription;
