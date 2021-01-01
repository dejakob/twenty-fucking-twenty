import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../March';
import InstagramPost from '../InstragamPost';
import useWindowSize from '../../hooks/useWindowSize';
import Separator from '../Separator';

import homemadeBurgerImage from '../../assets/homemade-burger.jpg';
import pastaImage from '../../assets/pasta.jpg';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 400;

const April = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      className="April"
      title="April"
    >
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={homemadeBurgerImage}
        imageAlt="Homemade burger"
        url="https://www.instagram.com/p/B-sIgjKo9gL"
        note="Even more house arrest..."
      />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={pastaImage}
        imageAlt="Pasta"
        url="https://www.instagram.com/p/B--Kr8Rob07"
      />
    </Month>
  );
};

export default April;
