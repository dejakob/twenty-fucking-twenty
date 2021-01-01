import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../April';
import useWindowSize from '../../hooks/useWindowSize';
import Separator from '../Separator';
import InstagramPost from '../InstragamPost';
import FacebookIcon from '../FacebookIcon';
import Achievement, { TYPES as ACHIEVEMENT_TYPE } from '../Achievement';
import './May.scss';

import skatingImage from '../../assets/skating.jpg';
import faceMaskImage from '../../assets/facemask.jpg';
import farAwayImage from '../../assets/far-away.jpg';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 400;

const May = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      className="May"
      title="May"
    >
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={skatingImage}
        imageAlt="Skating - Five seconds of freedom"
        url="https://www.facebook.com/photo?fbid=3006693376036062&amp;set=a.452807001424725"
        note="Finally allowed to go out (a couple of hours)"
        icon={<FacebookIcon height={48} width={48} color="#fff" />}
      />
      <Separator />
      <Achievement type={ACHIEVEMENT_TYPE.VIRUS} title="Face masks mandatory">
        For the rest of the year (at least)
        <br />
        👎 👎 👎
      </Achievement>
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={faceMaskImage}
        imageAlt="Face mask"
        url="https://www.instagram.com/p/B_0VwOsoklJ"
        note="Best way to hide your emotions"
      />
      <Separator />
      <Achievement type={ACHIEVEMENT_TYPE.AWARD} title="Skated 38.52km">
        On May 24th during the 10 seconds of freedom
      </Achievement>
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={farAwayImage}
        imageAlt="Some place far away"
        url="https://www.instagram.com/p/CAGWNTNojKn"
        note="Skating brings you to interesting places"
      />
    </Month>
  );
};

export default May;
