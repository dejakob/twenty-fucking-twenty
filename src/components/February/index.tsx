import useWindowSize from '../../hooks/useWindowSize';
import Achievement, { TYPES as ACHIEVEMENT_TYPE } from '../Achievement';
import { END_SCROLL_POSITION as END_SCROLL_LAST_ITEM } from '../FiredAtLetgo';
import InstagramPost from '../InstragamPost';
import Month from '../Month';
import Quote from '../Quote';
import Separator from '../Separator';
import PlaceVisited from '../PlaceVisited';

import greenVitaImage from '../../assets/greenvita-february.jpg';
import pubLimerickImage from '../../assets/limerick.jpg';
import belgiumImage from '../../assets/belgium.jpg';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 400;
export const HIDE_POSITION = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 400;

const February = () => {
  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      className="February"
      title="February"
    >
      <FebruaryComponent />
    </Month>
  );
};

const FebruaryComponent = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  return (
    <>
      <Separator />
      <Quote author="Jakob Kerkhove - just after getting 🧯">Viva la vida loca 🍹🕺</Quote>
      <Separator />
      <Achievement type={ACHIEVEMENT_TYPE.TALK}>Told a story for a live audience</Achievement>
      <Separator />
      <Achievement type={ACHIEVEMENT_TYPE.TALK}>Stand up comedy for the first time evaaaaar</Achievement>
      <Separator />
      <InstagramPost
        imageAlt="Some healthy type of food"
        height={photoSize}
        width={photoSize}
        imageSrc={greenVitaImage}
        url="https://www.instagram.com/p/B8JPOH2oM2h"
        note="Don't be fooled, I'm only pretending to be healthy"
      />
      <InstagramPost
        imageAlt="Pub Limerick"
        height={photoSize}
        width={photoSize}
        imageSrc={pubLimerickImage}
        url="https://www.instagram.com/p/B8hUXDgIekz"
        note="Potvolkoffie Limerick, why did you have to close?"
      />
      <Separator />
      <PlaceVisited backgroundImage={belgiumImage} placeName="Belgium">
        Just to check if the country still exists
      </PlaceVisited>
      <Separator />
      Blog: How much JavaScript do you actually need? And what for?
    </>
  );
};

export default February;
