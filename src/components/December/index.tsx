import Month from '../Month';
import { END_OF_ALL_SCROLL as END_SCROLL_LAST_ITEM } from '../November';
import Separator from '../Separator';
import useWindowSize from '../../hooks/useWindowSize';
import { useEffect } from 'react';

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
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@dejakob/video/6910229866600271106"
        data-video-id="6910229866600271106"
        style={{ maxWidth: '605px', minWidth: '325px', transform: 'scale(0.7)', margin: 0 }}
      >
        <section>
          <a target="_blank" rel="noreferrer noopener" title="@dejakob" href="https://www.tiktok.com/@dejakob">
            @dejakob
          </a>
          <p>
            <a
              title="inlineskating"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.tiktok.com/tag/inlineskating"
            >
              #inlineskating
            </a>
            <a
              title="patinesenlinea"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.tiktok.com/tag/patinesenlinea"
            >
              #patinesenlinea
            </a>
            <a title="barcelona" target="_blank" rel="noreferrer noopener" href="https://www.tiktok.com/tag/barcelona">
              #barcelona
            </a>
            <a title="winter" target="_blank" rel="noreferrer noopener" href="https://www.tiktok.com/tag/winter">
              #winter
            </a>
            <a title="sports" target="_blank" rel="noreferrer noopener" href="https://www.tiktok.com/tag/sports">
              #sports
            </a>
          </p>
          <a
            target="_blank"
            title="♬ It's Tricky - Run - D.M.C."
            href="https://www.tiktok.com/music/It's-Tricky-6705028726888859649"
            rel="noreferrer noopener"
          >
            ♬ It's Tricky - Run - D.M.C.
          </a>
        </section>
      </blockquote>
    </Month>
  );
};

export default December;
