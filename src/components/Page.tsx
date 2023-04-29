import React from 'react';
import './Page.css';
import ChampionTier from './ChampionTier';
import { useState } from 'react';

const Page = () => {
    const [stage, setStage] = useState('');

    const handleStageChange = (stage: string) => {
        setStage(stage);
    }

    const stageFiltering = (stage: string) => {
        switch(stage) {
            case 'early':
                return (
                <div className="page-tierlist-early" id='early'>
                <ChampionTier selectedStage={'early-game'}/>
            </div>
                );
                
        }
        
    }

  return (
    <div className='page-container'>
        <div className="page-header">
            <h1>TFT TIER LIST</h1>
            <h2>Set 8.5</h2>
        </div>
        <div className="page-body">
            <div className="page-filter">
                <div className="stage-filter">
                <button className='drop-menu'>Stage</button>
                <div className="stages">
                    <a href='#early' onClick={() => {handleStageChange('early')}}>Early</a>
                    <a href='#mid' onClick={() => {handleStageChange('mid')}}>Mid</a>
                    <a href='#late' onClick={() => {handleStageChange('late')}}>Late</a>
                </div>
                </div>
                <div className="search-filter">
                    <input type="text" placeholder='Champion'></input>
                </div>
            </div>
            <div className="page-tierlist">
                <div className="try">
                {stageFiltering(stage)}
                </div>
                <div className="page-tierlist-mid">
                <ChampionTier selectedStage={'mid-game'}/>
                </div>
                <div className="page-tierlist-late">
                <ChampionTier selectedStage={'late-game'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page