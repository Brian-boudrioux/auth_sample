import React from "react";
import Profile from "../../assets/NavBar/Profile.svg";

function NavBarProfile({ user }) {
  return (
    <div className="profile">
      <button type="button">
        <img src={Profile} alt="profile" />
        <p>{user.Email}</p>
      </button>
    </div>
  );
}

export default NavBarProfile;
