import { FC, ReactNode } from 'react';
import PlaneIcon from '../PlaneIcon';
import './PlaceVisited.scss';

interface Props {
  placeName: string;
  children: ReactNode;
  backgroundImage: string;
}

const PlaceVisited: FC<Props> = ({ placeName, children, backgroundImage }: Props) => {
  return (
    <div className="PlaceVisited" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="PlaceVisited-content">
        <PlaneIcon height={64} width={64} color="#fff" />
        <h3 className="PlaceVisited-title">Visited {placeName}</h3>
        <p className="PlaceVisited-paragraph">{children}</p>
      </div>
    </div>
  );
};

export default PlaceVisited;
