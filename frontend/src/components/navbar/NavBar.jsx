import React, { useContext } from "react";
import NavBarHome from "./NavBarHome";
import NavBarSearch from "./NavBarSearch";
import NavBarProfile from "./NavBarProfile";
import authContext from "../../context/AuthContext";
import NavBarFollowing from "./NavBarFollowing";
import "./navbarstyle.css";

function Navbar() {
  const auth = useContext(authContext);
  console.log(auth);
  return (
    <div className="mobile">
      <NavBarHome />
      <NavBarSearch />
      <NavBarFollowing />
      {auth.user && <NavBarProfile user={auth.user} />}
    </div>
  );
}

export default Navbar;
