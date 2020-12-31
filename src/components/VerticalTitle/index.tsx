import { FC } from 'react';
import './VerticalTitle.scss';

interface Props {
  children: string;
}

const VerticalTitle: FC<Props> = ({ children }: Props) => {
  return (
    <div className="VerticalTitle-wrapper">
      <h2 className="VerticalTitle">
        {children.split('').map((char) => (
          <span className="VerticalTitle-char">{char}</span>
        ))}
      </h2>
    </div>
  );
};

export default VerticalTitle;
