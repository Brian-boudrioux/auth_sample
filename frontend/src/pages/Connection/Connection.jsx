import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./connection.css";
import logorf from "../../assets/images/logorf.png";
import logorayj from "../../assets/images/logorayj.png";
import authContext from "../../context/AuthContext";

function Connection() {
  const navigate = useNavigate();
  const Email = useRef();
  const Password = useRef();
  const auth = useContext(authContext);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", credentials: true },
          body: JSON.stringify({
            Email: Email.current.value,
            Password: Password.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const user = await response.json();
        auth.setUser(user);
        navigate("/homepage");
      } else {
        console.error("veuillez verifier votre saisie.");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            ref={Email}
          />
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Votre mot de passe"
            ref={Password}
          />
        </div>
        <div>
          <button
            className="btn-connection"
            type="button"
            onClick={handleSubmit}
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
