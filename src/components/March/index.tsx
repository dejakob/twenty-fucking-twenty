import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../February';
import Separator from '../Separator';
import Achievement, { TYPES as ACHIEVEMENT_TYPE } from '../Achievement';
import useWindowSize from '../../hooks/useWindowSize';
import InstagramPost from '../InstragamPost';
import LinkedinIcon from '../LinkedinIcon';
import Quote from '../Quote';
import './March.scss';

import newJobImage from '../../assets/newjob.jpeg';
import emptyMetroImage from '../../assets/empty-metro.jpg';
import cookingImage from '../../assets/cooking-march.jpg';
import cooking2Image from '../../assets/cooking2-march.jpg';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 400;

const March = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      className="March"
      title="March"
    >
      <Separator />
      <Achievement type={ACHIEVEMENT_TYPE.WORK}>
        Starting new job at New Relic
        <br />
        Senior Software Engineer
      </Achievement>
      <Separator />
      <InstagramPost
        height={photoSize}
        width={photoSize * 1.338}
        imageSrc={newJobImage}
        imageAlt="New job"
        url="https://www.linkedin.com/posts/jakob-kerkhove-4a987281_yaaaay-its-my-first-day-at-new-relic-inc-activity-6640253312312586240-n2Qr"
        icon={<LinkedinIcon height={48} width={48} color="#fff" />}
      />
      <Separator />
      <Quote author="Jakob Kerkhove - March 2020">Wow, such a nice view from the office</Quote>
      <Separator />
      <Achievement type={ACHIEVEMENT_TYPE.VIRUS} title="Coronavirus outbreak 😱">
        Working remote
        <br />
        Until the end of the year
      </Achievement>
      <Separator />
      <InstagramPost
        imageSrc={emptyMetroImage}
        imageAlt="Empty metro due to COVID"
        height={photoSize}
        width={photoSize}
        url="https://www.instagram.com/p/B9ru9lboGhS"
        note='"Social distancing"'
      />
      <Separator />
      <Achievement type={ACHIEVEMENT_TYPE.VIRUS} title="House arrest">
        👎 👎 👎
      </Achievement>
      <Separator />
      <Quote author="Jakob Kerkhove - March 2020">This is crazy, this virus will fly over quickly</Quote>
      <Separator />
      <InstagramPost
        imageSrc={cookingImage}
        imageAlt="Mashed patatoes"
        height={photoSize}
        width={photoSize}
        url="https://www.instagram.com/p/B-hsvcvoQrN"
        note="Well, if I can't leave the house..."
      />
      <InstagramPost
        imageSrc={cooking2Image}
        imageAlt="Arroz con Pollo"
        height={photoSize}
        width={photoSize}
        url="https://www.instagram.com/p/B-m6M-ZodYf"
        note="Nom nom nom #crisisfood"
      />
    </Month>
  );
};

export default March;
