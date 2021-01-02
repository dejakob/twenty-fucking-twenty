import React, { FC, useState } from 'react';
import useBodyScroll from '../../hooks/useBodyScroll';
import ExplicitWord from '../ExplicitWord';
import './Intro.scss';

interface Props {}

const Intro: FC<Props> = () => {
  const [visible, setVisibility] = useState(true);

  useBodyScroll((scrollTop: number) => {
    setVisibility && setVisibility(scrollTop <= 1200);
  });

  if (!visible) {
    return null;
  }

  return (
    <article className="Intro">
      <div className="Intro-content">
        <h1 className="Intro-title">
          Twenty{' '}
          <ExplicitWord>f*cking</ExplicitWord>{' '}
          twenty
        </h1>
        <h2 className="Intro-subtitle">According to dejakob</h2>
        <small className="Intro-tip">Scroll down to explore</small>
      </div>
    </article>
  );
};


export default Intro;
