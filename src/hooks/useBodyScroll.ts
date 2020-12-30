import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

type ScrollHandler = (scrollY: number) => void;

const useBodyScroll = (handler: ScrollHandler) => {
  const handlers: MutableRefObject<ScrollHandler[]> = useRef([] as ScrollHandler[]);

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  });
  useEffect(() => {
    handlers.current.push(handler);
  }, [handler]);

  const handleScroll = useCallback((event: Event) => {
    const { target } = event as any;
    handlers.current.forEach((handler) => {
      handler(target.scrollTop);
    });
  }, []);
};

export default useBodyScroll;
