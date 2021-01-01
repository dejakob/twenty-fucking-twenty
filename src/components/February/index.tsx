import useWindowSize from '../../hooks/useWindowSize';
import Achievement, { TYPES as ACHIEVEMENT_TYPE } from '../Achievement';
import { END_SCROLL_POSITION as END_SCROLL_LAST_ITEM } from '../FiredAtLetgo';
import InstagramPost from '../InstragamPost';
import Month from '../Month';
import Quote from '../Quote';
import Separator from '../Separator';
import PlaceVisited from '../PlaceVisited';
import PlaneIcon from '../PlaneIcon';

import greenVitaImage from '../../assets/greenvita-february.jpg';
import pubLimerickImage from '../../assets/limerick.jpg';
import belgiumImage from '../../assets/belgium.jpg';
import Blog from '../Blog';

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
      <PlaceVisited
        icon={<PlaneIcon height={64} width={64} color="#fff" />}
        backgroundImage={belgiumImage}
        placeName="Belgium"
      >
        Just to check if the country still exists
      </PlaceVisited>
      <Separator />
      <Blog
        title="How much JavaScript do you actually need? And what for?"
        url="https://levelup.gitconnected.com/how-much-javascript-do-you-actually-need-and-what-for-2e0ae47aa9cc"
      >
        Since I’m living in Barcelona, I visit comedy/storytelling events from time to time. However, I was having some
        trouble with which event was what day as they all had different Facebook pages, etc. Then I remembered I was a
        developer and decided to create a simple list with all the upcoming events myself. As I wanted to create
        something quickly, I decided to bootstrap a project with Next.js so I could use both server-side and client-side
        React.
      </Blog>
    </>
  );
};

export default February;
