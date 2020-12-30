import React, { FC } from 'react';
import useBodyScroll from '../../hooks/useBodyScroll';
import ExplicitWord from '../ExplicitWord';
import './Intro.scss';

interface Props {}

const Intro: FC<Props> = () => {
  useBodyScroll((scrollTop: number) => {});

  return (
    <article className="Intro">
      <div className="Intro-content">
        <h1 className="Intro-title">
          Twenty
          <br />
          <ExplicitWord>f*cking</ExplicitWord>
          <br />
          twenty
        </h1>
      </div>
    </article>
  );
};

export default Intro;
