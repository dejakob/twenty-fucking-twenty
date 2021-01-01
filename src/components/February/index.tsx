import { END_SCROLL_POSITION as END_SCROLL_LAST_ITEM } from '../FiredAtLetgo';
import Month from '../Month';
import Quote from '../Quote';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 400;
export const HIDE_POSITION = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 400;

const February = () => {
  console.log('START_SCROLL_POSITION', START_SCROLL_POSITION);
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
  return (
    <>
      <Quote author="Jakob Kerkhove - just after getting 🧯">Viva la vida loca 🍹🕺</Quote>
    </>
  );
};

export default February;
