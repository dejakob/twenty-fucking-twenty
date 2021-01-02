import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../June';
import Separator from '../Separator';
import InstagramPost from '../InstragamPost';
import useWindowSize from '../../hooks/useWindowSize';
import Quote from '../Quote';
import './July.scss';

import storytellingImage from '../../assets/storytelling.jpg';
import summerImage from '../../assets/summer.jpg';
import meInSummerImage from '../../assets/me-in-summer.jpg';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 400;

const July = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      className="July"
      title="July"
    >
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize * 0.8}
        imageSrc={storytellingImage}
        imageAlt="Storytelling @ Dorotea"
        url="https://www.instagram.com/p/CCE9kyKIAxy"
        note="Telling stories n stuff"
      />
      <Separator />
      <Quote author="Jakob Kerkhove - July 2020">Damn, it's hot</Quote>
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={summerImage}
        imageAlt="Summer in Spain"
        url="https://www.instagram.com/p/CDqx6-goGVj"
      />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={meInSummerImage}
        imageAlt="Me in summer"
        url="https://www.instagram.com/p/CDG6RhYIjlU"
      />
    </Month>
  );
};

export default July;
