import { FC, ReactNode } from 'react';
import './Quote.scss';

interface Props {
  children: ReactNode;
  author?: string;
}

const Quote: FC<Props> = ({ children, author }: Props) => {
  return (
    <blockquote className="Quote">
      <div className="Quote-content">{children}</div>
      {author && <small className="Quote-author">{author}</small>}
    </blockquote>
  );
};

export default Quote;
