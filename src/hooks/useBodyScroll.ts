import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

type ScrollHandler = (scrollY: number) => void;

const useBodyScroll = (handler: ScrollHandler) => {
  const handlers: MutableRefObject<ScrollHandler[]> = useRef([] as ScrollHandler[]);

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll);
    document.body.addEventListener('wheel', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('wheel', handleScroll);
    };
  });
  useEffect(() => {
    handlers.current.push(handler);
  }, [handler]);

  const handleScroll = useCallback((event: Event) => {
    handlers.current.forEach((handler) => {
      handler(window.scrollY);
    });
  }, []);
};

export default useBodyScroll;
