import React from "react";
import Following from "../../assets/NavBar/Wallet.svg";

function NavBarFollowing() {
  return (
    <div className="following">
      <button type="button">
        <img src={Following} alt="following" />
      </button>
    </div>
  );
}

export default NavBarFollowing;
