import React, { CSSProperties, FC } from 'react';
import ExplicitWord from '../ExplicitWord';
import ScrollTween from '../ScrollTween';
import './Intro.scss';

interface Props {}

const Intro: FC<Props> = () => {
  return (
    <article className="Intro">
      <div className="Intro-content">
        <ScrollTween start={0} stop={200} from={{ opacity: 1 }} to={{ opacity: 0.5 }}>
          {IntroContent}
        </ScrollTween>
      </div>
    </article>
  );
};

const IntroContent = (style: CSSProperties) => {
  return (
    <h1 className="Intro-title" style={style}>
      Twenty
      <br />
      <ExplicitWord>f*cking</ExplicitWord>
      <br />
      twenty
    </h1>
  );
};

export default Intro;
