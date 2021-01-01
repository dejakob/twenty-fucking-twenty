import React from 'react';
import February from '../February';
import FiredAtLetgo from '../FiredAtLetgo';
import Intro from '../Intro';
import January from '../January';
import March from '../March';
import April from '../April';
import './App.scss';
import May from '../May';
import June from '../June';

function App() {
  return (
    <main className="App">
      <Intro />
      <January />
      <FiredAtLetgo />
      <February />
      <March />
      <April />
      <May />
      <June />
    </main>
  );
}

export default App;
