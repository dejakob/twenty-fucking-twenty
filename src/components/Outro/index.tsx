import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../December';

import './Outro.scss';
import Achievement, { TYPES as ACHIEVEMENT_TYPE } from '../Achievement';
import useElementSize from '../../hooks/useElementSize';
import { Ref } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

export const START_SCROLL_POSITION = END_SCROLL_LAST_ITEM;
export const END_SCROLL_POSITION = START_SCROLL_POSITION + 400;
export const CONTENT_SCROLL_DURATION = 800;
export const END_OF_ALL_SCROLL = END_SCROLL_POSITION + 100 + CONTENT_SCROLL_DURATION + 200;
export const HIDE_POSITION = END_OF_ALL_SCROLL + 1200;

const Outro = () => {
  const { height: windowHeight } = useWindowSize();
  const [{ height }, elementRef] = useElementSize();

  const additionalScrollY = windowHeight - height;

  return (
    <Month
      contentScrollDuration={CONTENT_SCROLL_DURATION}
      scrollSlideStart={START_SCROLL_POSITION}
      scrollSlideEnd={END_SCROLL_POSITION + additionalScrollY}
      additionalScrollY={additionalScrollY}
      scrollRemovalPoint={HIDE_POSITION}
      className="Outro"
    >
      <div ref={elementRef as Ref<HTMLDivElement>} className="Outro-innerContent">
        <Achievement title="Congratulations" type={ACHIEVEMENT_TYPE.TROPHY}>
          By reading this text, it means you successfully survived 2020.
          <br />
          Keep on doing that! You can do it!
          <br />
          <br />
          Special thanks to everyone I met this year that helped me get through this insanity!
        </Achievement>
        <div className="Outro-disclaimerBox">
          <h4 className="Outro-disclaimerTitle">Disclaimer</h4>
          <small className="Outro-disclaimer">
            Every statement, joke, expression or picture that was posted on this website on social media was done in
            name of the individual and does not represent any company, government institution or 3rd party.
            <br />
            No animals were harmed during the making of this website.
            <br />
            It is recommended to use hand sanitizer and wear a face mask before using this page.
            <br />
            The author of this web page cannot be held accountable for damage done to your personal device while
            visiting. Even if the cause of the damage is by accidentally spoiling a cup of coffee due to frustration or
            laughter when reading some of this text, the author will not be liable for any damage.
            <br />
            The background image on the intro is a public stock image, which can be found{' '}
            <a
              href="https://www.pexels.com/photo/backlit-breathing-apparatus-danger-dangerous-279979/"
              title="Stock image"
              target="_blank"
              rel="noreferrer noopener"
              className="Outro-disclaimerLink"
            >
              here
            </a>
            . Icons were used from{' '}
            <a
              href="https://tablericons.com/"
              title="Tabler icons"
              target="_blank"
              rel="noreferrer noopener"
              className="Outro-disclaimerLink"
            >
              Tablericons.com
            </a>
            . All other pictures on the website were made by the author himself. They cannot be used on a shady dating
            website.
            <br />
            This project was not made, approved, disapproved or discussed in any way by any individual named 'Carles'.
          </small>
        </div>
      </div>
    </Month>
  );
};

export default Outro;
