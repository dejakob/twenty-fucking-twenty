import { FC } from 'react';
import './InstagramPost.scss';

interface Props {
  imageSrc: string;
  imageAlt: string;
  height: number;
  width: number;
  note?: string;
}

const InstagramPost: FC<Props> = ({ imageSrc, imageAlt, height, width, note }: Props) => {
  return (
    <figure className="InstagramPost">
      <img className="InstagramPost-img" src={imageSrc} alt={imageAlt} height={height} width={width} />
      {note && <figcaption className="InstagramPost-figCaption">{note}</figcaption>}
    </figure>
  );
};

export default InstagramPost;
