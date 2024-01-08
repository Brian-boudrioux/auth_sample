// import react from "react";
import Arrow from "../../assets/images/Arrow.svg";
import "./recapopup.css";

function Recapitulatif() {
  return (
    <section className="fenetrepopup">
      <h1>Recapitulatif</h1>
      <div>
        <button type="button" className="button-retour">
          <img className="quitter" alt="" src={Arrow} />
        </button>
        <h2>titre et voir</h2>
        <hr />
      </div>
      <div className="windowrecap">
        <p>test</p>
      </div>
    </section>
  );
}

export default Recapitulatif;
