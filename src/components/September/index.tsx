import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../August';
import Separator from '../Separator';
import useWindowSize from '../../hooks/useWindowSize';
import Blog from '../Blog';

import './September.scss';
import Quote from '../Quote';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 400;

const September = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      className="September"
      title="September"
    >
      <Separator />
      <Blog
        title="How I ended up in Amsterdam"
        url="https://dejakob.medium.com/how-i-ended-up-in-amsterdam-bb91542beb87"
      >
        As you might have heard in one of my previous stories, I lived in Amsterdam before and I didn’t really like the
        city. To me, it’s an over-expensive cold place where you’re usually flatmates with rats. You might wonder, how
        did I even end up in this place? Well, I’m gonna tell you? Ok ok ok?
      </Blog>
      <Separator />
      <Quote author="Jakob Kerkhove">Potvolkoffie</Quote>
    </Month>
  );
};

export default September;
