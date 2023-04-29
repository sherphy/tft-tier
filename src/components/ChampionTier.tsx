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
        return Object.values(champions.data)
        .filter((champion: Champion) => champion[selectedStage])
        .sort((a: Champion, b: Champion) => {
            const tierOrder: {[selectedStage: string]: number} = { S: 3, A: 2, B: 1 };
            return tierOrder[b[selectedStage]] - tierOrder[a[selectedStage]];
        })
        .map((champion: Champion) => <div key={champion.id}>
            <h1>{champion.name}</h1>
            </div>);
    }

    return (
        <div className='champion-tiered'>
            {tiering()}
        </div>
    )

    }

export default ChampionTier;