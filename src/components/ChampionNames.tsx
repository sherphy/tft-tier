import champions from "./tft-champs.json";

interface ChampionNameProps {
    searchedName: string;
}

const ChampionNames = ({searchedName}: ChampionNameProps) => {

    const getChampionNames = () => {
        return Object.values(champions.data)
        .filter((champion) => champion.name.toLowerCase().includes(searchedName.toLowerCase()))
        .map((champion) => (
            <option value={champion.name}/>
        ))
    }

  return (
      <datalist id="champion-names"> {getChampionNames()} </datalist>
  )
}

export default ChampionNames