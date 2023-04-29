/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Page.css";
import ChampionTier from "./ChampionTier";
import { useState } from "react";
import ChampionRender from "./ChampionRender";
import champions from '../assets/tft-champs.json';
import { Champion } from "./ChampionTier";

const Page = () => {
    const [stage, setStage] = useState("");
    const [search, setSearch] = useState("");
    const [filteredChampions, setFilteredChampions] = useState<Champion[]>([]);

    const handleStageChange = (stage: string) => {
        setStage(stage);
    };

    const getFilteredChampions = () => {
        return Object.values(champions.data)
          .filter((champion) =>
            champion.name.toLowerCase().includes(search.toLowerCase())
          );
      };

    const handleSearch : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearch(e.target.value);
        setFilteredChampions(getFilteredChampions());
        console.log(search);
        console.log(filteredChampions);
    }

    const stageFiltering = (stage: string) => {
        switch (stage) {
            case "early":
                return (
                    <div className="page-tierlist-early single-stage" id="early">
                        <ChampionTier selectedStage={"early-game"} />
                    </div>
                );
            case "mid":
                return (
                    <div className="page-tierlist-mid single-stage" id="mid">
                        <ChampionTier selectedStage={"mid-game"} />
                    </div>
                );
            case "late":
                return (
                    <div className="page-tierlist-late single-stage" id="late">
                        <ChampionTier selectedStage={"late-game"} />
                    </div>
                );
            case "":
                return (
                    <div className="page-tierlist">
                        <div className="page-tierlist-early bordered" id="early">
                            <ChampionTier selectedStage={"early-game"} />
                        </div>
                        <div className="page-tierlist-mid bordered">
                            <ChampionTier selectedStage={"mid-game"} />
                        </div>
                        <div className="page-tierlist-late">
                            <ChampionTier selectedStage={"late-game"} />
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>TFT TIER LIST</h1>
                <h2>Set 8.5</h2>
                <h3>{search}</h3>
            </div>
            <div className="page-body">
                <div className="page-filter">
                    <div className="stage-filter">
                        <button className="drop-menu">Stage</button>
                        <div className="stages">
                            <a
                                href="#"
                                onClick={() => {
                                    handleStageChange("");
                                }}
                            >
                                All
                            </a>
                            <a
                                href="#early"
                                onClick={() => {
                                    handleStageChange("early");
                                }}
                            >
                                Early
                            </a>
                            <a
                                href="#mid"
                                onClick={() => {
                                    handleStageChange("mid");
                                }}
                            >
                                Mid
                            </a>
                            <a
                                href="#late"
                                onClick={() => {
                                    handleStageChange("late");
                                }}
                            >
                                Late
                            </a>
                        </div>
                    </div>
                    <div className="search-filter">
                        {/* <input type='text' placeholder="Champion" onChange={(e) => setSearch(e.target.value)}></input> */}
                        {/* <input list="champion-names" placeholder="Champion" onChange={(e) => setSearch(e.target.value)}/> */}
                        {/* <datalist id="champion-names"> getChampionNames() </datalist> */}
                        <input
              list="champion-names"
              placeholder="Champion"
              onChange={(e) => {handleSearch(e)}}
            />
            <datalist id="champion-names">
            {filteredChampions.map((champion) => (
                <option value={champion.name}/>
            ))}
            </datalist>
                </div>
                </div>
                <div className="page-content">
                {/* if search is empty, then stageFiltering, otherwise searched champion*/}
                {search === '' ? stageFiltering(stage) : 
                filteredChampions.map((champion) => (
                    <ChampionRender champion={champion}/>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
