import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../May';
import Separator from '../Separator';
import Achievement, { TYPES as ACHIEVEMENT_TYPE } from '../Achievement';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 400;

const June = () => {
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
    </Month>
  );
};

export default June;
