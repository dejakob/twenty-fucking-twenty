import React, { CSSProperties, FC, useState } from 'react';
import useBodyScroll from '../../hooks/useBodyScroll';
import useWindowSize from '../../hooks/useWindowSize';
import ScrollTween from '../ScrollTween';
import VerticalTitle from '../VerticalTitle';
import './January.scss';

interface Props {}

const January: FC<Props> = () => {
  const [visible, setVisibility] = useState(false);
  const { height: windowHeight } = useWindowSize();

  useBodyScroll((scrollTop: number) => {
    setVisibility(scrollTop > 800);
  });

  if (!visible) {
    return null;
  }

  return (
    <ScrollTween start={801} stop={1200} from={{ y: windowHeight }} to={{ y: windowHeight * 0.3 }}>
      {JanuaryContainer}
    </ScrollTween>
  );
};

const JanuaryContainer = (style: CSSProperties) => {
  return (
    <section className="January" style={style}>
      <ScrollTween start={1201} stop={1600} from={{ x: 40 }} to={{ x: -500 }}>
        {JanuaryContent}
      </ScrollTween>
    </section>
  );
};

const JanuaryContent = (style: CSSProperties) => {
  return (
    <div className="January-content" style={style}>
      <VerticalTitle>January</VerticalTitle>
      <blockquote>
        "This is gonna be my year"
        <small>Jakob Kerkhove - January 2020</small>
      </blockquote>
    </div>
  );
};

export default January;
