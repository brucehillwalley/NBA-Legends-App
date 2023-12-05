import React from "react";

const PlayerCard = ({ data }) => {
  return (
    <div className="player-cards">
      {data.map((player) => (
        <div className="player-card">
          <img src={player.img} alt="" width="100px"/>
          <h3>{player.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;
