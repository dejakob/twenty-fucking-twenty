import { FC } from 'react';
import InstagramIcon from '../InstagramIcon';
import './InstagramPost.scss';

interface Props {
  imageSrc: string;
  imageAlt: string;
  height: number;
  width: number;
  url: string;
  note?: string;
}

const InstagramPost: FC<Props> = ({ imageSrc, imageAlt, height, width, note, url }: Props) => {
  return (
    <figure className="InstagramPost">
      <img className="InstagramPost-img" src={imageSrc} alt={imageAlt} height={height} width={width} />
      {note && <figcaption className="InstagramPost-figCaption">{note}</figcaption>}
      <a href={url} target="_blank" rel="noreferrer noopener" title="Open on Instagram" className="InstagramPost-gramLink">
        <InstagramIcon height={48} width={48} color="#fff" />
      </a>
    </figure>
  );
};

export default InstagramPost;
