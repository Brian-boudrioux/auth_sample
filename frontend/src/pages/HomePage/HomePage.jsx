import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import NavBar from "../../components/navbar/NavBar";
import CardAnnonce from "../../components/cards/CardAnnonce";
import AnnonceContext from "../../context/AnnonceContext";
import "./homepage.css";

function HomePage() {
  const [filter, setFilter] = useState([]);
  const users = useLoaderData();
  const annonce = useContext(AnnonceContext);
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  const filterAnnonce = annonce.data.filter((poste) => {
    return filter.length === 0 || filter.includes(poste.domaine);
  });
  return (
    <div className="homepage">
      {users && users.map((user) => <p>{user.Email}</p>)}
      <section className="entete">
        <Header />
      </section>
      <section className="catfilter">
        <Category onFilterChange={handleFilterChange} />
      </section>
      <section className="row">
        <div className="annonce">
          {filterAnnonce.map((poste) => (
            <CardAnnonce poste={poste} />
          ))}
        </div>
      </section>
      <section className="footer">
        <NavBar />
      </section>
    </div>
  );
}

export default HomePage;
