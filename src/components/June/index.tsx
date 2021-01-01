import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../May';
import Separator from '../Separator';
import Achievement, { TYPES as ACHIEVEMENT_TYPE } from '../Achievement';
import InstagramPost from '../InstragamPost';
import useWindowSize from '../../hooks/useWindowSize';
import PlaceVisited from '../PlaceVisited';
import TrainIcon from '../TrainIcon';

import parkGuellImage from '../../assets/park-guell.jpg';
import plazaEspanaImage from '../../assets/plaza-espana.jpg';
import moritzImage from '../../assets/moritz.jpg';
import tarragonaImage from '../../assets/tarragona.jpg';
import tarragona2Image from '../../assets/tarragona2.jpg';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 400;

const June = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      className="June"
      title="June"
    >
      <Separator />
      <Achievement type={ACHIEVEMENT_TYPE.VIRUS} title="Some restrictions are lifted">
        Not a minute too early... Ough...
      </Achievement>
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={parkGuellImage}
        imageAlt="Park Guëll"
        url="https://www.instagram.com/p/CBYDV3oIQl-"
        note="Where are all the tourists???"
      />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={plazaEspanaImage}
        imageAlt="Plaza España"
        url="https://www.instagram.com/p/CBqLwhko3kk"
        note="Like, seriously?"
      />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={moritzImage}
        imageAlt="Moritz"
        url="https://www.instagram.com/p/CBqUjJFonA7"
      />
      <Separator />
      <PlaceVisited
        placeName="Tarragona"
        backgroundImage={tarragonaImage}
        icon={<TrainIcon height={64} width={64} color="#fff" />}
      >
        Let's see what's around Barcelona
      </PlaceVisited>
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize}
        imageSrc={tarragona2Image}
        imageAlt="Tarragona"
        url="https://www.instagram.com/p/CB0kBaEooxZ"
      />
    </Month>
  );
};

export default June;
