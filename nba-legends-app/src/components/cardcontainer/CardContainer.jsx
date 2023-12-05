import React from "react";
import PlayerCard from "../PlayerCard";
import "./cardcontainer.scss";
import { data } from "../../helper/data";

const CardContainer = () => {
  return (
    <div className="cardcontainer">
      <input type="search" name="" id="" />
      <PlayerCard data={data} />
    </div>
  );
};

export default CardContainer;
