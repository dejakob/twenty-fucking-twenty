import { DependencyList, MutableRefObject, useCallback, useEffect, useRef } from 'react';

type ScrollHandler = (scrollY: number) => void;

const useBodyScroll = (handler: ScrollHandler) => {
  const handlers: MutableRefObject<ScrollHandler[]> = useRef([] as ScrollHandler[]);

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll);
    document.body.addEventListener('wheel', handleScroll);
    document.body.addEventListener('keydown', handleScroll);
    document.body.addEventListener('resize', handleScroll);

    handlers.current.push(handler);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('wheel', handleScroll);
      document.body.removeEventListener('keydown', handleScroll);
      document.body.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    handlers.current.forEach((handler) => {
      handler(window.scrollY);
    });
  }, []);
};

export default useBodyScroll;
