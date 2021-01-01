import { useCallback, useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleResize = useCallback(() => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
  }, []);

  return windowSize;
};

export default useWindowSize;
