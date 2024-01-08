import React from "react";
import Profile from "../../assets/NavBar/Profile.svg";

function NavBarProfile() {
  return (
    <div className="profile">
      <button type="button">
        <img src={Profile} alt="profile" />
      </button>
    </div>
  );
}

export default NavBarProfile;
