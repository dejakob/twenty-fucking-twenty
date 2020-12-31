import { FC, ReactElement, CSSProperties, useState, useRef, useEffect } from 'react';
import useBodyScroll from '../../hooks/useBodyScroll';

interface TweenPosition {
  scale?: number;
  x?: number;
  y?: number;
  z?: number;
  opacity?: number;
  top?: number;
  left?: number;
}
interface Props {
  children: (style: CSSProperties, childProps: { [key: string]: any }) => ReactElement;
  start: number;
  stop: number;
  from: TweenPosition;
  to: TweenPosition;
  [key: string]: any;
}

const ScrollTween: FC<Props> = ({ children, from, to, start, stop, ...childProps }: Props) => {
  const shouldScale = typeof from.scale === 'number' && typeof to.scale === 'number';
  const shouldTranslateX = typeof from.x === 'number' && typeof to.x === 'number';
  const shouldTranslateY = typeof from.y === 'number' && typeof to.y === 'number';
  const shouldTranslateZ = typeof from.z === 'number' && typeof to.z === 'number';
  const shouldFade = typeof from.opacity === 'number' && typeof to.opacity === 'number';

  const [styleState, setStyleState] = useState({} as CSSProperties);

  const ref = useRef({} as { from: any; to: any });

  useEffect(() => {
    ref.current = {
      from,
      to,
    };
  }, [from, to]);

  useBodyScroll((scrollTop: number) => {
    const style: CSSProperties = {};
    const { from, to } = ref.current;

    if (from && to && scrollTop >= start && scrollTop <= stop) {
      const percentage = (scrollTop - start) / (stop - start);

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
    } else if (scrollTop < start) {
      if (shouldScale) {
        style.transform = style.transform || '';
        style.transform += ` scale(${from.scale!})`;
      }

      if (shouldTranslateX) {
        style.transform = style.transform || '';
        style.transform += ` translateX(${from.x!}px)`;
      }

      if (shouldTranslateY) {
        style.transform = style.transform || '';
        style.transform += ` translateY(${from.y!}px)`;
      }

      if (shouldTranslateZ) {
        style.transform = style.transform || '';
        style.transform += ` translateZ(${from.z!}px)`;
      }

      if (shouldFade) {
        style.opacity = from.opacity!;
      }
    } else if (scrollTop > stop) {
      if (shouldScale) {
        style.transform = style.transform || '';
        style.transform += ` scale(${to.scale!})`;
      }

      if (shouldTranslateX) {
        style.transform = style.transform || '';
        style.transform += ` translateX(${to.x!}px)`;
      }

      if (shouldTranslateY) {
        style.transform = style.transform || '';
        style.transform += ` translateY(${to.y!}px)`;
      }

      if (shouldTranslateZ) {
        style.transform = style.transform || '';
        style.transform += ` translateZ(${to.z!}px)`;
      }

      if (shouldFade) {
        style.opacity = to.opacity!;
      }
    }

    setStyleState(style);
  });

  return children(styleState, childProps);
};

export default ScrollTween;
