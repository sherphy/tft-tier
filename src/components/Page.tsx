/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Page.css";
import ChampionTier from "./ChampionTier";
import { useState, useEffect } from "react";
import ChampionRender from "./ChampionRender";
import champions from "../assets/tft-champs.json";
import { Champion } from "./ChampionTier";
import tftlogo from '../assets/tftlogo.png';

const Page = () => {
    const [stage, setStage] = useState("");
    const [search, setSearch] = useState("");
    const [filteredChampions, setFilteredChampions] = useState<Champion[]>([]);

    //for the different stages
    const handleStageChange = (stage: string) => {
        setStage(stage);
        //clears champion also, when stage is selected
        //then lets stage be selected according to early/mid/late
        setSearch("");
    };
    
    const getFilteredChampions = () => {
        return Object.values(champions.data).filter((champion) =>
        champion.name.toLowerCase().includes(search.toLowerCase())
        );
    };

    //otherwise it will be async, then one letter late
    //because getFilteredChampions called immediately after search
    useEffect(() => {
        setFilteredChampions(getFilteredChampions());
      }, [getFilteredChampions]);

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
                <h1>TEAMFIGHT TACTICS TIER LIST</h1>
                <h2>Set 8.5</h2>
            </div>
            <div className="page-body">
                <div className="page-filter">
                    <div className="stage-filter">
                        <button className="drop-menu">{stage ? stage.charAt(0).toUpperCase() + stage.slice(1) : "Stage"}</button>
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
                        <input
                            list="champion-names"
                            placeholder="Champion"
                            // value is search so that when clear is clicked, it resets
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                        <datalist id="champion-names">
                            {filteredChampions.map((champion) => (
                                <option value={champion.name} onSelect={(e) => setSearch((e.target as HTMLInputElement).value)}/>
                            ))}
                        </datalist>
                        <button onClick={() => {setSearch("")}}> Clear </button>
                    </div>
                </div>
                <div className="page-content">
                    {/* if search is empty, then stageFiltering, otherwise searched champion*/}
                    {search === ""
                        ? stageFiltering(stage)
                        : filteredChampions.map((champion) => (
                            <div className="searched-champion-parent">
                            <div className="searched-champion-results">
                                <div className="searched-champion-icon">
                                    <ChampionRender champion={champion} />
                                </div>
                                <div className="searched-champion-details">
                                {champion["early-game"] && <h3>Early game: {champion["early-game"]}</h3>}
{champion["mid-game"] && <h3>Mid game: {champion["mid-game"]}</h3>}
{champion["late-game"] && <h3>Late game: {champion["late-game"]}</h3>}
                                </div>
                            </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
