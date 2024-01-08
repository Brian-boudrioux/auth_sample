import React from "react";
import Home from "../../assets/NavBar/Home.svg";

function NavBarHome() {
  return (
    <div className="home">
      <button type="button">
        <img src={Home} alt="home" />
      </button>
    </div>
  );
}

export default NavBarHome;
