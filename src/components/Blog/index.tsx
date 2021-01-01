import { ReactNode } from 'react';
import './Blog.scss';

interface Props {
  title: string;
  children: ReactNode;
  url: string;
}

const Blog = ({ title, children, url }: Props) => {
  return (
    <div className="Blog">
      <h3 className="Blog-title">{title}</h3>
      <p className="Blog-paragraph">{children}</p>
      <a className="Blog-readLink" href={url} target="_blank" rel="noreferrer noopener" title="Read blog" tabIndex={0}>
        Read more
      </a>
    </div>
  );
};

export default Blog;
