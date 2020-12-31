import { useCallback, useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    document.body.addEventListener('resize', handleResize);

    return () => {
      document.body.removeEventListener('resize', handleResize);
    };
  });

  const handleResize = useCallback(() => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
  }, []);

  return windowSize;
};

export default useWindowSize;
