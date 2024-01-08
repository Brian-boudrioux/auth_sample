import { useState } from "react";
import Select from "react-select";
import Header from "../../components/header/Header";
// import recapopup from "../../components/popup/recapopup";
import "./post.css";

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

function Post() {
  const [softSkills, setSoftSkills] = useState([]);
  const handleSelectSoftSkillChange = (selectedSoftSkillOptions) => {
    setSoftSkills(selectedSoftSkillOptions);
  };
  const [hardSkills, sethardSkills] = useState([]);
  const handleSelectHardSkillChange = (selectedHardSkillOptions) => {
    sethardSkills(selectedHardSkillOptions);
  };
  return (
    <div className="pageprofiljesaispas">
      <Header />
      <div className="offersannonces">
        <h1 className="creationannonce">Creation de l'annonce</h1>
        <fieldset className="domaine">
          <legend className="legenddomaine">Domaine</legend>
          <label htmlFor="domaine">
            <select className="departement" id="domaine">
              <option value="">Indiquez le domaine de l'annonce</option>
              <option value="rh">Ressources humaines</option>
              <option value="technique">Techniques</option>
              <option value="sécurité">Sécurité</option>
            </select>
          </label>
        </fieldset>

        <fieldset className="jobs">
          <legend className="offersmetier">Métiers</legend>
          <label htmlFor="metier">
            <select className="choicejobs" name="metier" id="metier">
              <option value="">Metiers correspondant au domaine</option>
              <option value="Développeur">Développeur</option>
              <option value="Data">Data analist</option>
              <option value="sécurité">Agent SIAAP</option>
              <option value="ressources humaines">
                Chargé(e) de communication
              </option>
              <option value="ressource humaines">
                Responsable developpement commercial
              </option>
            </select>
          </label>
        </fieldset>

        <fieldset className="city">
          <legend>Localisation</legend>
          <label htmlFor="ville">
            <select className="lieux" name="ville" id="ville">
              <option value="">Indiquez la ville ou ce situe l'offre</option>
              <option value="Paris">Paris</option>
              <option value="Val de Marne">Val de Marne</option>
              <option value="Toulouse">Toulouse</option>
              <option value="Nantes">Nante</option>
              <option value="Lille">Lille</option>
            </select>
          </label>
        </fieldset>

        <fieldset className="annoncedecrite">
          <legend>Annonce</legend>
          <label htmlFor="descriptionoffers">
            <textarea
              className="offersdescription"
              rows="10"
              cols="35"
              name="message"
              required
              placeholder="Détailler l'annonce"
            />
          </label>
        </fieldset>
        <h2 className="comptetout">Compétences et Outils</h2>
        <div>
          <p className="skill_block_heading">Soft Skill</p>
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
        </div>

        <h2 className="formation"> Formation</h2>
        <div>
          <input type="radio" id="oui" name="formation" />
          <label className="affirmatif" htmlFor="oui">
            oui
          </label>

          <input type="radio" id="non" name="formation" />
          <label htmlFor="non">Non</label>
        </div>

        <h2 className="demandeanciennete">Ancienneté demandé</h2>
        <div className="anciennetechoix">
          <input className="6-mois" type="radio" id="6mois" name="seniority" />
          <label className="anciennnete" htmlFor="6mois">
            6mois
          </label>
          <input type="radio" id="1ans" name="seniority" />
          <label className="anciennete" htmlFor="1ans">
            1ans
          </label>
          <input type="radio" id="2ans" name="seniority" />
          <label htmlFor="2ans">2ans</label>
        </div>
      </div>
      <button type="button" className="recapt">
        Recapitulatif
      </button>
    </div>
  );
}

export default Post;
