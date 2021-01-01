import { CSSProperties, FC, useState } from 'react';
import useBodyScroll from '../../hooks/useBodyScroll';
import useWindowSize from '../../hooks/useWindowSize';
import ScrollTween from '../ScrollTween';
import './FiredAtLetgo.scss';

interface Props {}

const FiredAtLetgo: FC<Props> = () => {
  const [visible, setVisibility] = useState(false);
  const { height: windowHeight } = useWindowSize();

  useBodyScroll((scrollTop: number) => {
    setVisibility(scrollTop > 2000);
  });

  if (!visible) {
    return null;
  }

  return (
    <ScrollTween start={2001} stop={2400} from={{ y: windowHeight }} to={{ y: 0 }}>
      {FiredAtLetgoComponent}
    </ScrollTween>
  );
};

const FiredAtLetgoComponent = (style: CSSProperties) => {
  return (
    <section className="FiredAtLetgo" style={style}>
      <h2 className="FiredAtLetgo-title">January 27th</h2>
      <p className="FiredAtLetgo-paragraph">Getting fired right before a pandemic, always great</p>
      <span className="FiredAtLetgo-emojis">🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥</span>
    </section>
  );
};

export default FiredAtLetgo;
