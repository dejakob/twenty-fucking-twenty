import { useState, createRef, useEffect, RefObject } from 'react';

const useElementSize = <ElementType>(): [{ height: number; width: number }, RefObject<ElementType>] => {
  const elementRef = createRef<ElementType>();
  const [size, setSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    if (elementRef.current) {
      const { height, width } = (elementRef.current as any).getBoundingClientRect();

      if (size.height !== height || size.width !== width) {
        setSize({ height, width });
      }
    }
  }, [elementRef, size.height, size.width]);

  return [size, elementRef];
};

export default useElementSize;
