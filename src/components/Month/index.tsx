import { CSSProperties, FC, ReactNode, Ref, useState } from 'react';
import useBodyScroll from '../../hooks/useBodyScroll';
import useElementSize from '../../hooks/useElementSize';
import useWindowSize from '../../hooks/useWindowSize';
import ScrollTween from '../ScrollTween';
import VerticalTitle from '../VerticalTitle';
import './Month.scss';

interface Props {
  scrollSlideStart: number;
  scrollSlideEnd: number;
  scrollRemovalPoint: number;
  contentScrollDuration: number;
  children: ReactNode;
  title?: string;
  className?: string;
  additionalScrollY?: number;
}

const Month: FC<Props> = ({
  scrollSlideStart,
  scrollSlideEnd,
  scrollRemovalPoint,
  contentScrollDuration,
  title,
  className,
  children,
  additionalScrollY,
}: Props) => {
  const [visible, setVisibility] = useState(false);
  const { height: windowHeight, width: windowWidth } = useWindowSize();
  const [{ width: contentWidth }, contentRef] = useElementSize();

  useBodyScroll((scrollTop: number) => {
    setVisibility(scrollTop > scrollSlideStart && scrollTop <= scrollRemovalPoint);
  });

  if (!visible) {
    return null;
  }

  return (
    <ScrollTween
      start={scrollSlideStart + 1}
      stop={scrollSlideEnd}
      from={{ y: windowHeight }}
      to={{ y: -1 * (additionalScrollY || 0) }}
      windowWidth={windowWidth}
      className={className}
      childNode={children}
      contentRef={contentRef}
      scrollContentSlideStart={scrollSlideEnd + 100}
      scrollContentSlideEnd={scrollSlideEnd + 100 + contentScrollDuration}
      contentWidth={contentWidth}
      title={title}
    >
      {MonthSection}
    </ScrollTween>
  );
};

const MonthSection = (
  style: CSSProperties,
  {
    className,
    childNode,
    contentRef,
    scrollContentSlideStart,
    scrollContentSlideEnd,
    windowWidth,
    contentWidth,
    title,
  }: {
    childNode: ReactNode;
    className?: string;
    contentRef: Ref<any>;
    scrollContentSlideStart: number;
    scrollContentSlideEnd: number;
    windowWidth: number;
    contentWidth: number;
    title?: string;
  },
) => {
  const allClassNames = ['Month'];

  if (className) {
    allClassNames.push(className);
  }

  const shouldAddHorizontalScroll = contentWidth > windowWidth;

  return (
    <section className={allClassNames.join(' ')} style={style}>
      <ScrollTween
        start={scrollContentSlideStart}
        stop={scrollContentSlideEnd}
        from={{ x: 0 }}
        to={shouldAddHorizontalScroll ? { x: -1 * (contentWidth - windowWidth) } : { x: 0 }}
        contentRef={contentRef}
        childNode={childNode}
        title={title}
      >
        {MonthContent}
      </ScrollTween>
    </section>
  );
};

const MonthContent = (
  style: CSSProperties,
  {
    childNode,
    contentRef,
    title,
  }: {
    childNode: ReactNode;
    contentRef: Ref<any>;
    title?: string;
  },
) => {
  return (
    <div className="Month-content" style={style} ref={contentRef}>
      {title && <VerticalTitle>{title}</VerticalTitle>}
      {childNode}
    </div>
  );
};

export default Month;
