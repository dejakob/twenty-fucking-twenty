import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../September';
import Separator from '../Separator';
import useWindowSize from '../../hooks/useWindowSize';

import seagullImage from '../../assets/seagull.jpg';
import InstagramPost from '../InstragamPost';
import Blog from '../Blog';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 400;

const October = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      className="October"
      title="October"
    >
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={seagullImage}
        imageAlt="Seagull"
        url="https://www.instagram.com/p/CGujbnnpzzz"
      />
      <Separator />
      <Blog
        title="How to get a burn-out in 7 days"
        url="https://dejakob.medium.com/how-to-get-a-burn-out-in-7-days-88794c977a14"
      >
        As I'm great with giving horrible advice, I decided to write a guide on how to get a burn-out in 7 days
      </Blog>
    </Month>
  );
};

export default October;
