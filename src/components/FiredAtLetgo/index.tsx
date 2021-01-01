import { CSSProperties, FC, useState } from 'react';
import useBodyScroll from '../../hooks/useBodyScroll';
import useWindowSize from '../../hooks/useWindowSize';
import ScrollTween from '../ScrollTween';
import './FiredAtLetgo.scss';

import { END_SCROLL_POSITION as END_SCROLL_POSITION_JANUARY } from '../January';

export const START_SCROLL_POSITION = END_SCROLL_POSITION_JANUARY;
export const SCROLL_POSITION_PARAGRAPH_FADE_IN = START_SCROLL_POSITION + 400;
export const END_SCROLL_POSITION = SCROLL_POSITION_PARAGRAPH_FADE_IN + 200;

interface Props {}

const FiredAtLetgo: FC<Props> = () => {
  const [visible, setVisibility] = useState(false);
  const { height: windowHeight } = useWindowSize();

  useBodyScroll((scrollTop: number) => {
    setVisibility(scrollTop > START_SCROLL_POSITION);
  });

  if (!visible) {
    return null;
  }

  return (
    <ScrollTween
      start={START_SCROLL_POSITION + 1}
      stop={SCROLL_POSITION_PARAGRAPH_FADE_IN}
      from={{ y: windowHeight }}
      to={{ y: 0 }}
    >
      {FiredAtLetgoComponent}
    </ScrollTween>
  );
};

const FiredAtLetgoComponent = (style: CSSProperties) => {
  return (
    <section className="FiredAtLetgo" style={style}>
      <h2 className="FiredAtLetgo-title">January 27th</h2>
      <ScrollTween
        start={SCROLL_POSITION_PARAGRAPH_FADE_IN + 1}
        stop={END_SCROLL_POSITION}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {FiredAtLetgoParagraph}
      </ScrollTween>
      <span className="FiredAtLetgo-emojis">🔥🔥🔥</span>
    </section>
  );
};

const FiredAtLetgoParagraph = (style: CSSProperties) => {
  return (
    <p className="FiredAtLetgo-paragraph" style={style}>
      Getting fired right before a pandemic, always great
    </p>
  );
};

export default FiredAtLetgo;
