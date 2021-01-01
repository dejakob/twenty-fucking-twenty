import React, { CSSProperties, FC, useState } from 'react';
import useBodyScroll from '../../hooks/useBodyScroll';
import useElementSize from '../../hooks/useElementSize';
import useWindowSize from '../../hooks/useWindowSize';
import ExplicitWord from '../ExplicitWord';
import ScrollTween from '../ScrollTween';
import './Intro.scss';

interface Props {}

const Intro: FC<Props> = () => {
  const [visible, setVisibility] = useState(true);
  const { height: windowHeight, width: windowWidth } = useWindowSize();
  const [{ height: elementHeight, width: elementWidth }, elementRef] = useElementSize<HTMLDivElement>();

  const elementX = (windowWidth - elementWidth) / 2;
  const elementY = (windowHeight - elementHeight) / 2;

  useBodyScroll((scrollTop: number) => {
    setVisibility && setVisibility(scrollTop <= 1200);
  });

  if (!visible) {
    return null;
  }

  return (
    <article className="Intro">
      <div className="Intro-content">
        <ScrollTween
          start={0}
          stop={400}
          from={{ scale: 1 }}
          to={{ scale: 0.3 }}
          elementX={elementX}
          elementY={elementY}
          elementRef={elementRef}
        >
          {IntroTranslate}
        </ScrollTween>
      </div>
    </article>
  );
};

const IntroTranslate = (style: CSSProperties, { elementRef, elementX, elementY }: any) => {
  return (
    <ScrollTween
      start={401}
      stop={800}
      from={{ x: elementX, y: elementY }}
      to={{ x: -0.17 * elementX, y: -0.4 * elementY }}
      elementRef={elementRef}
      additionalStyle={style}
    >
      {IntroContent}
    </ScrollTween>
  );
};

const IntroContent = (style: CSSProperties, { elementRef, additionalStyle }: any) => {
  const transform = `${style.transform} ${additionalStyle.transform}`;

  return (
    <h1 className="Intro-title" style={{ transform }} ref={elementRef}>
      Twenty
      <br />
      <ExplicitWord>f*cking</ExplicitWord>
      twenty
    </h1>
  );
};

export default Intro;
