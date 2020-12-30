import { FC, ReactElement, CSSProperties, useRef, useState } from 'react';
import useBodyScroll from '../../hooks/useBodyScroll';

interface TweenPosition {
  scale?: number;
  x?: number;
  y?: number;
  z?: number;
  opacity?: number;
}
interface Props {
  children: (style: CSSProperties) => ReactElement;
  start: number;
  stop: number;
  from: TweenPosition;
  to: TweenPosition;
}

const ScrollTween: FC<Props> = ({ children, from, to, start, stop }: Props) => {
  const shouldScale = typeof from.scale === 'number' && typeof to.scale === 'number';
  const shouldTranslateX = typeof from.x === 'number' && typeof to.x === 'number';
  const shouldTranslateY = typeof from.y === 'number' && typeof to.y === 'number';
  const shouldTranslateZ = typeof from.z === 'number' && typeof to.z === 'number';
  const shouldFade = typeof from.opacity === 'number' && typeof to.opacity === 'number';

  const percentageRef = useRef(0);
  const [styleState, setStyleState] = useState({} as CSSProperties);

  useBodyScroll((scrollTop: number) => {
    if (scrollTop >= start && scrollTop <= stop) {
      const percentage = (scrollTop - start) / (stop - start);

      if (percentageRef.current === percentage) {
        return;
      }

      percentageRef.current = percentage;
      const style: CSSProperties = {};

      if (shouldScale) {
        style.transform = style.transform || '';
        style.transform += ` scale(${from.scale! + percentage * (to.scale! - from.scale!)})`;
      }

      if (shouldTranslateX) {
        style.transform = style.transform || '';
        style.transform += ` translateX(${from.x! + percentage * (to.x! - from.x!)}px)`;
      }

      if (shouldTranslateY) {
        style.transform = style.transform || '';
        style.transform += ` translateY(${from.y! + percentage * (to.y! - from.y!)}px)`;
      }

      if (shouldTranslateZ) {
        style.transform = style.transform || '';
        style.transform += ` translateZ(${from.z! + percentage * (to.z! - from.z!)}px)`;
      }

      if (shouldFade) {
        style.opacity = from.opacity! + percentage * (to.opacity! - from.opacity!);
      }

      setStyleState(style);
    }
  });

  console.log(styleState);
  return children(styleState);
};

export default ScrollTween;
