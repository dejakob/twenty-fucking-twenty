import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../February';
import Separator from '../Separator';
import Achievement, { TYPES as ACHIEVEMENT_TYPE } from '../Achievement';

import './March.scss';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 400;
export const HIDE_POSITION = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 400;

const March = () => {
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
        Starting new job at New Relic<br />
        Senior Software Engineer
      </Achievement>
      <Separator />
    </Month>
  );
};

export default March;
