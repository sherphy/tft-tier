/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Page.css";
import ChampionTier from "./ChampionTier";
import { useState } from "react";
import ChampionNames from "./ChampionNames";

const Page = () => {
    const [stage, setStage] = useState("");

    const handleStageChange = (stage: string) => {
        setStage(stage);
    };

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
    <input list="champion-names" placeholder="Champion"/>  
  <ChampionNames />
                    </div>
                </div>
                <div className="page-content">
                {stageFiltering(stage)}
                </div>
            </div>
        </div>
    );
};

export default Page;
