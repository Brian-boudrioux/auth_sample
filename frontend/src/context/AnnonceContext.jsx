import { useMemo, useState, createContext } from "react";
import armees from "../assets/cards/cardannonce/armees.png";
import interieur from "../assets/cards/cardannonce/interieur.png";
import mtfp from "../assets/cards/cardannonce/mtfp.png";

const AnnonceContext = createContext();

function AnnonceProvider({ children }) {
  const [offre] = useState([
    {
      offer: 1,
      domaine: "Technique",
      titre: "Developpeur Web",
      description:
        "Nous sommes à la recherche d’un(e) développeur(euse) web talentueux(se). Vous serez responsable de la conception, du développement et de la maintenance de nos applications web, en veillant à offrir une expérience utilisateur exceptionnelle. Nous serions ravis de discuter de votre candidature.",
      softskills: ["Humour", "Autonomie", "Réactivité"],
      hardskills: ["Management", "Anglais", "CSS"],
      image: mtfp,
      ville: "paris",
    },
    {
      offer: 2,
      domaine: "Sécurité",
      titre: "Mangeur de moules",
      description: "Nous sommes à la recherche d’un(e) bouche gobeuse ......",
      softskills: ["Gourmand", "Curieux", "Epicurien"],
      hardskills: ["Riche", "Technicien", "Couteau Suisse"],
      image: interieur,
      ville: "toulouse",
    },
    {
      offer: 3,
      domaine: "Technique",
      titre: "Developpeur FullStack",
      description: "Nous sommes à la recherche d’un(e) chargé(e) ......",
      softskills: ["Réactivité", "Autonomie", "Sens de l'écoute"],
      hardskills: ["Diplomatie", "Multilinguisme", "Rédaction"],
      image: mtfp,
      ville: "pointe à pitre",
    },
    {
      offer: 4,
      domaine: "Sécurité",
      titre: "Formateur ",
      description: "Nous sommes à la recherche d’un(e) chargé(e) ......",
      softskills: ["Réactivité", "Autonomie", "Sens de l'écoute"],
      hardskills: ["Diplomatie", "Multilinguisme", "Rédaction"],
      image: armees,
      ville: "bagnolet",
    },
    {
      offer: 5,
      domaine: "Sécurité",
      titre: "Medecin",
      description: "Nous sommes à la recherche d’un(e) chargé(e) ......",
      softskills: ["Réactivité", "Autonomie", "Sens de l'écoute"],
      hardskills: ["Diplomatie", "Multilinguisme", "Rédaction"],
      image: interieur,
      ville: "nantes",
    },
    {
      offer: 6,
      domaine: "Ressources Humaines",
      titre: "Blagueur",
      description: "Nous sommes à la recherche d’un(e) chargé(e) ......",
      softskills: ["Réactivité", "Autonomie", "Sens de l'écoute"],
      hardskills: ["Diplomatie", "Multilinguisme", "Rédaction"],
      image: interieur,
      ville: "Bourg-la-reine",
    },
    {
      offer: 7,
      domaine: "Technique",
      titre: "Cuisinier",
      description: "Nous sommes à la recherche d’un(e) chargé(e) ......",
      softskills: ["Réactivité", "Autonomie", "Sens de l'écoute"],
      hardskills: ["Diplomatie", "Multilinguisme", "Rédaction"],
      image: interieur,
      ville: "Thionville",
    },
    {
      offer: 8,
      domaine: "Technique",
      titre: "Balayeur",
      description: "Nous sommes à la recherche d’un(e) chargé(e) ......",
      softskills: ["Réactivité", "Autonomie", "Sens de l'écoute"],
      hardskills: ["Diplomatie", "Multilinguisme", "Rédaction"],
      image: mtfp,
      ville: "Limoges",
    },
  ]);
  const data = useMemo(() => ({ data: offre }), [offre]);
  return (
    <AnnonceContext.Provider value={data}>{children}</AnnonceContext.Provider>
  );
}
export { AnnonceProvider };
export default AnnonceContext;
