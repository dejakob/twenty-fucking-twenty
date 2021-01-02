import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import InstagramPost from '../InstragamPost';
import Quote from '../Quote';
import portImage from '../../assets/port-january.jpg';
import arrozConPollo from '../../assets/arroz-con-pollo-january.jpg';
import Month from '../Month';
import './January.scss';
import Separator from '../Separator';

export const START_SCROLL_POSITION = 0;
export const SCROLL_SLIDE_END_POSITION = START_SCROLL_POSITION + 400;
export const SCROLL_CONTENT_SLIDE_START = SCROLL_SLIDE_END_POSITION + 100;
export const CONTENT_SCROLL_DURATION = 400;
export const SCROLL_CONTENT_SLIDE_END = SCROLL_CONTENT_SLIDE_START + CONTENT_SCROLL_DURATION;
export const END_SCROLL_POSITION = SCROLL_CONTENT_SLIDE_END + 400;
export const HIDE_POSITION = END_SCROLL_POSITION + 400;

const January = () => {
  return (
    <Month
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={SCROLL_SLIDE_END_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      className="January"
      title="January"
    >
      <JanuaryContent />
    </Month>
  );
};

const JanuaryContent = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  return (
    <>
      <Separator />
      <Quote author="Jakob Kerkhove - January 2020">This is gonna be my year</Quote>
      <Separator />
      <InstagramPost
        imageSrc={portImage}
        imageAlt="Barcelona port - January"
        height={photoSize}
        width={photoSize}
        url="https://www.instagram.com/p/B7BG4S_ozkX"
      />
      <InstagramPost
        imageSrc={arrozConPollo}
        imageAlt="Arroz con Pollo - January"
        height={photoSize}
        width={photoSize}
        note="Yeah yeah, I started cooking, but don't get used to it"
        url="https://www.instagram.com/p/B7WhK2GoWMT"
      />
      <Separator />
      <Quote author="Jakob Kerkhove - just before getting 🧯">Viva la vida loca 🍹🕺</Quote>
    </>
  );
};

export default January;
