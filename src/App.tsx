import React from 'react';
import Early from './components/Early';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Page/>
      <Early gameStage={'early-game'}/>
    </div>
  );
}

export default App;
