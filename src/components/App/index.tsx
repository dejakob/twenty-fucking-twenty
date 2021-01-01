import React, { useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import February from '../February';
import FiredAtLetgo from '../FiredAtLetgo';
import Intro from '../Intro';
import January from '../January';
import March from '../March';
import April from '../April';
import './App.scss';
import May from '../May';
import June from '../June';
import July from '../July';
import August from '../August';
import September from '../August';
import October from '../August';
import November from '../August';
import December, { HIDE_POSITION } from '../August';

function App() {
  const { height: windowHeight } = useWindowSize();
  useEffect(() => {
    document.body.querySelector('#root')!.setAttribute('style', `height: ${HIDE_POSITION - 1}px`);
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
      <July />
      <August />
      <September />
      <October />
      <November />
      <December />
    </main>
  );
}

export default App;
