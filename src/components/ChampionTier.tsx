import React from 'react'
import champions from '../assets/tft-champs.json'

interface Champion {
    id: string;
    name: string;
    tier: number;
    image: object;
    // early-game property is enclosed in single quotes because it contains a hyphen
    // which is an illegal character
    'early-game'?: string;
    'mid-game'?: string;
    'late-game'?: string;
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
          console.log(acc);
          return acc;
        }, {});
  

        return Object.keys(acc).map((tier: string) => (
            <div key={tier}>
              <h2>{tier}</h2>
              {acc[tier].map((champion: Champion) => {
                const imageName = `TFT8_${champion.name}.TFT_Set8.png`;
                return (
                <div key={champion.id}>
                  <h3>{champion.name}</h3>
                  <img src={require(`../assets/img/${imageName}`)} alt={`${champion.name} icon`}></img>
                </div>
              )})}
            </div>
          ));
        };

    return (
        <div className='champion-tiered'>
            {tiering()}
        </div>
    )

    }

export default ChampionTier;