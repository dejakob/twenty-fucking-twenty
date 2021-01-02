import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../November';
import Separator from '../Separator';
import { useEffect } from 'react';
import Achievement, { TYPES as ACHIEVEMENT_TYPE } from '../Achievement';
import InstagramPost from '../InstragamPost';
import useWindowSize from '../../hooks/useWindowSize';
import TiktokIcon from '../TiktokIcon';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 400;

const December = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const photoSize = Math.min(windowWidth, windowHeight);

  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://www.tiktok.com/embed.js');
    document.body.appendChild(script);
  }, []);

  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION}
      scrollRemovalPoint={HIDE_POSITION}
      className="December"
      title="December"
    >
      <Separator />
      <Achievement type={ACHIEVEMENT_TYPE.AWARD} title="3 months without alcohol">
        Stopped on September 20th
      </Achievement>
      <Separator />
      <Achievement type={ACHIEVEMENT_TYPE.TROPHY} title="Survived Xmas and NYE">
        It was a challenge this year -.-
      </Achievement>
      <Separator />
      {/* 960 / 540 */}
      <InstagramPost
        imageSrc="/tiktokVideo.mp4"
        imageAlt="My first tiktok video"
        height={photoSize}
        width={(540 / 960) * photoSize}
        note="My first tiktok post! Omg, I'm 14!"
        icon={<TiktokIcon height={48} width={48} color="#fff" />}
        url="https://www.tiktok.com/@dejakob/video/6910229866600271106"
      />
    </Month>
  );
};

export default December;
