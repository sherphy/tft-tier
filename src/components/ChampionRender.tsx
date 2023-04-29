import React from 'react'
import { Champion } from "./ChampionTier"

const ChampionRender = ({ champion }: { champion: Champion }) => {
    const imageName = `TFT8_${champion.name}.TFT_Set8.png`;
    return (
      <div key={champion.id} className="champion-renders">
        <img
          className="champion-icon"
          src={require(`../assets/img/${imageName}`)}
          alt={`${champion.name} icon`}
        />
        <h3 className="champion-name">{champion.name}</h3>
      </div>
    );
}

export default ChampionRender