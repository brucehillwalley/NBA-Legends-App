import React from "react";
import pic from "../../assets/nba-logo.png";
import "./header.scss"
const Header = () => {
  return (
    <div className="headercompo">
      <img src={pic} alt="" height="100px" />
      <h1>NBA Legends</h1>
    </div>
  );
};

export default Header;
