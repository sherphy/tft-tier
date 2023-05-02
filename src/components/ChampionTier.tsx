import champions from "./tft-champs.json";
import ChampionRender from "./ChampionRender";
import React from 'react';

export interface Champion {
  id: string;
  name: string;
  tier: number;
  image: object;
  // early-game property is enclosed in single quotes because it contains a hyphen
  // which is an illegal character
  "early-game"?: string;
  "mid-game"?: string;
  "late-game"?: string;
  [key: string]: any;
}
const ChampionTier = ({ selectedStage }: { selectedStage: string }) => {
  const tiering = () => {
    const acc: { [tier: string]: Champion[] } = Object.values(champions.data)
      //if the stage is whatever it is
      .filter((champion: Champion) => champion[selectedStage])
      //sort by tier
      .sort((a: Champion, b: Champion) => {
        const tierOrder: { [tier: string]: number } = { S: 3, A: 2, B: 1 };
        return tierOrder[b[selectedStage]] - tierOrder[a[selectedStage]];
      })
      //put the ones in the same tier together
      .reduce((acc: { [tier: string]: Champion[] }, champion: Champion) => {
        const tier = champion[selectedStage];
        //if the tier alphabet doesnt exist
        //initialise it with empty array
        if (!acc[tier]) {
          acc[tier] = [];
        }
        acc[tier].push(champion);
        return acc;
      }, {});

    return Object.keys(acc).map((tier: string) => (
      <div className="champion-tiers">
        <div key={tier}>
          <div className="tier-render">
            <img
              className="tier-alphabet"
              src={`../assets/${tier}.png`}
              alt="tier"
            ></img>
          </div>
          {acc[tier].map((champion: Champion) => {
            return <ChampionRender champion={champion} key={champion.id}/>
          })}
        </div>
      </div>
    ));
  };

  return <div className="champion-tiered">{tiering()}</div>;
};

export default ChampionTier;
