import React, { CSSProperties, FC, useState } from 'react';
import useBodyScroll from '../../hooks/useBodyScroll';
import useWindowSize from '../../hooks/useWindowSize';
import InstagramPost from '../InstragamPost';
import Quote from '../Quote';
import ScrollTween from '../ScrollTween';
import VerticalTitle from '../VerticalTitle';
import portImage from '../../assets/port-january.jpg';
import arrozConPollo from '../../assets/arroz-con-pollo-january.jpg';
import './January.scss';
import useElementSize from '../../hooks/useElementSize';

interface Props {}

const January: FC<Props> = () => {
  const [visible, setVisibility] = useState(false);
  const { height: windowHeight, width: windowWidth } = useWindowSize();

  useBodyScroll((scrollTop: number) => {
    setVisibility(scrollTop > 800);
  });

  if (!visible) {
    return null;
  }

  return (
    <ScrollTween start={801} stop={1200} from={{ y: windowHeight }} to={{ y: 0 }} windowWidth={windowWidth}>
      {JanuaryContainer}
    </ScrollTween>
  );
};

const JanuaryContainer = (style: CSSProperties, { windowWidth }: any) => {
  const [{ width: contentWidth }, contentRef] = useElementSize();

  return (
    <section className="January" style={style}>
      <ScrollTween
        start={1301}
        stop={1800}
        from={{ x: 40 }}
        to={{ x: -1 * (contentWidth - windowWidth) }}
        contentRef={contentRef}
      >
        {JanuaryContent}
      </ScrollTween>
    </section>
  );
};

const JanuaryContent = (style: CSSProperties, { contentRef }: any) => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  return (
    <div className="January-content" style={style} ref={contentRef}>
      <VerticalTitle>January</VerticalTitle>
      <Quote author="Jakob Kerkhove - January 2020">This is gonna be my year</Quote>
      <InstagramPost
        imageSrc={portImage}
        imageAlt="Barcelona port - January"
        height={Math.min(windowWidth * 0.8, windowHeight)}
        width={Math.min(windowWidth * 0.8, windowHeight)}
      />
      <InstagramPost
        imageSrc={arrozConPollo}
        imageAlt="Arroz con Pollo - January"
        height={Math.min(windowWidth * 0.8, windowHeight)}
        width={Math.min(windowWidth * 0.8, windowHeight)}
        note="Yeah yeah, I started cooking, but don't get used to it"
      />
      <Quote author="Jakob Kerkhove - just before getting 🧯">Viva la vida loca 🍹🕺</Quote>
    </div>
  );
};

export default January;
