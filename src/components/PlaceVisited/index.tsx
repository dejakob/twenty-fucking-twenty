import { FC, ReactNode } from 'react';
import './PlaceVisited.scss';

interface Props {
  icon: ReactNode;
  placeName: string;
  children: ReactNode;
  backgroundImage: string;
}

const PlaceVisited: FC<Props> = ({ icon, placeName, children, backgroundImage }: Props) => {
  return (
    <div className="PlaceVisited" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="PlaceVisited-content">
        {icon}
        <h3 className="PlaceVisited-title">Visited {placeName}</h3>
        <p className="PlaceVisited-paragraph">{children}</p>
      </div>
    </div>
  );
};

export default PlaceVisited;
