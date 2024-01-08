import React from "react";
import { useNavigate } from "react-router-dom";
import "./connection.css";
import logorf from "../../assets/images/logorf.png";
import logorayj from "../../assets/images/logorayj.png";

function Connection() {
  const navigate = useNavigate();

  return (
    <div className="connection">
      <img className="logo" src={logorf} alt="logo de la société" />
      <div className="login-box">
        <div className="user-box">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Votre adresse e-mail"
          />
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Votre mot de passe"
          />
        </div>
        <div>
          <button
            className="btn-connection"
            type="button"
            onClick={() => navigate("/HomePage")}
          >
            Connexion
          </button>
          <hr className="ligne-btn-connection" />
        </div>
      </div>

      <div className="inscription-box">
        <h2 className="creationcompte">Pas encore De Compte ?</h2>
        <div>
          <button
            className="inscrire"
            type="button"
            onClick={() => navigate("/inscription")}
          >
            Je souhaite m'inscrire
          </button>
          <hr className="ligne-inscription" />
        </div>
      </div>

      <img className="ray" src={logorayj} alt="logo société" />
    </div>
  );
}

export default Connection;
