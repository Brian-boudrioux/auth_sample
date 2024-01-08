import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cardsannonce.css";
import ville from "../../assets/cards/ville.svg";

function CardAnnonce({ poste }) {
  const navigate = useNavigate();
  const [favori, setFavori] = useState({});
  const handleClick = (offer) => {
    setFavori((prev) => ({ ...prev, [offer]: !prev[offer] }));
  };
  return (
    <section className="overlap-group">
      <div className="card">
        <div className="placeholder" key={poste}>
          <img className="rangee1" src={poste?.image} alt="service" />
          <button
            type="button"
            onClick={() => handleClick(poste.offer)}
            className={favori[poste.offer] ? "fav jaune" : "icon"}
          >
            .
          </button>
          <button
            type="button"
            onClick={() => navigate(`/OfferDescription/${poste.offer}`)}
            className="text"
          >
            <h1>{poste?.titre}</h1>
            <div className="location">
              <div className="txt">
                <img className="iconlocal" src={ville} alt="ville" />
                <p>{poste.ville}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
export default CardAnnonce;
