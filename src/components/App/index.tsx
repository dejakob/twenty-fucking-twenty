import React, { useEffect } from 'react';
import February from '../February';
import FiredAtLetgo from '../FiredAtLetgo';
import Intro from '../Intro';
import January from '../January';
import './App.scss';

function App() {
  return (
    <main className="App">
      <Intro />
      <January />
      <FiredAtLetgo />
      <February />
    </main>
  );
}

export default App;
