import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

type ScrollHandler = (scrollY: number) => void;

const useBodyScroll = (handler: ScrollHandler) => {
  const handlers: MutableRefObject<ScrollHandler[]> = useRef([] as ScrollHandler[]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handlers.current.push(handler);
    setTimeout(() => handler(window.scrollY), 0);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  /* eslint-disable-next-line */
  }, []);

  const handleScroll = useCallback(() => {
    handlers.current.forEach((handler) => {
      handler(window.scrollY);
    });
  }, []);
};

export default useBodyScroll;
