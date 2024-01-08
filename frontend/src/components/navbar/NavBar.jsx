import React from "react";
import NavBarHome from "./NavBarHome";
import NavBarSearch from "./NavBarSearch";
import NavBarProfile from "./NavBarProfile";
import NavBarFollowing from "./NavBarFollowing";
import "./navbarstyle.css";

function Navbar() {
  return (
    <div className="mobile">
      <NavBarHome />
      <NavBarSearch />
      <NavBarFollowing />
      <NavBarProfile />
    </div>
  );
}

export default Navbar;
