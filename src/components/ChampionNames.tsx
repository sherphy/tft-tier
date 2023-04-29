import React from 'react'
import champions from "../assets/tft-champs.json";

const ChampionNames = () => {

    const getChampionNames = () => {
        return Object.values(champions.data).map((champion) => (
            <option key={champion.id} value={champion.name}>{champion.name}</option>
        ))
    }

  return (
    <datalist id="champion-names">{getChampionNames()}</datalist>
  )
}

export default ChampionNames