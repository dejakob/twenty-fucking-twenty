import React, { useEffect } from 'react';
import February from '../February';
import FiredAtLetgo from '../FiredAtLetgo';
import Intro from '../Intro';
import January from '../January';
import March from '../March';
import April from '../April';
import './App.scss';
import May from '../May';
import June, { HIDE_POSITION } from '../June';
import useWindowSize from '../../hooks/useWindowSize';

function App() {
  const { height: windowHeight } = useWindowSize();
  useEffect(() => {
    document.body.querySelector('#root')!.setAttribute('style', `height: ${HIDE_POSITION + windowHeight}px`);
  }, [windowHeight]);

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
