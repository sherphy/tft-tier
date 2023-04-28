import React from 'react'
import champions from '../assets/tft-champs.json'

const Early = ({ gameStage }: { gameStage: string }) => {

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
    }

    type gameStage = 'early-game' | 'mid-game' | 'late-game'

    const championTier = () => {
        return Object.values(champions.data)
        .filter((champion: Champion) => champion['early-game'])
        .map((champion: Champion) => <div key={champion.id}><h1>{champion.name}</h1></div>);
      }


  return (
    <div className='early-game-container'>
    {championTier()}
</div>
  )
}

export default Early