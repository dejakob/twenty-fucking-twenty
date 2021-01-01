import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../July';
import Separator from '../Separator';
import InstagramPost from '../InstragamPost';
import useWindowSize from '../../hooks/useWindowSize';
import PlaceVisited from '../PlaceVisited';
import TrainIcon from '../TrainIcon';

import valenciaImage from '../../assets/valencia.jpg';
import sombreroImage from '../../assets/sombrero.jpg';
import valenciaZooImage from '../../assets/valencia-zoo.jpg';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 400;

const August = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      className="August"
      title="August"
    >
      <Separator />
      <PlaceVisited
        backgroundImage={valenciaImage}
        icon={<TrainIcon height={64} width={64} color="#fff" />}
        placeName="Valencia"
      >
        Valenci-aaaaaaa
      </PlaceVisited>
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={sombreroImage}
        imageAlt="Sombrero"
        url="https://www.instagram.com/p/CD5t-W-o9Ux"
        note="Learning the word 'Sombrero'"
      />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={valenciaZooImage}
        imageAlt="Valencia zoo"
        url="https://www.instagram.com/p/CEB-U30o5e_"
      />
    </Month>
  );
};

export default August;
