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
import September from '../September';
import October from '../October';
import November from '../November';
import December from '../December';
import Outro, { HIDE_POSITION } from '../Outro';

function App() {
  const { height: windowHeight } = useWindowSize();
  useEffect(() => {
    document.body.querySelector('#root')!.setAttribute('style', `height: ${HIDE_POSITION - 1}px`);
  }, [windowHeight]);

  return (
    <>
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
        <Outro />
      </main>
    </>
  );
}

export default App;
