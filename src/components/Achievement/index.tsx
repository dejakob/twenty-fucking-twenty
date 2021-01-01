import { FC, ReactNode } from 'react';
import './Achievement.scss';

import MicrophoneIcon from '../MicrophoneIcon';
import AwardIcon from '../AwardIcon';
import TrophyIcon from '../TrophyIcon';

export enum TYPES {
  TALK = 'Talk',
  AWARD = 'Award',
  TROPHY = 'Trophy',
}

interface Props {
  type: TYPES;
  children: ReactNode;
}

const typeToIcon = (type: TYPES) => {
  switch (type) {
    case TYPES.TALK:
      return MicrophoneIcon;

    case TYPES.AWARD:
      return AwardIcon;

    case TYPES.TROPHY:
      return TrophyIcon;

    default:
      return null;
  }
};

const Achievement: FC<Props> = ({ type, children }: Props) => {
  const icon = typeToIcon(type)!({ color: '#333', height: 200, width: 200 });

  return (
    <div className="Achievement">
      <div className={`Achievement-icon${type}`}>{icon}</div>
      <h3 className="Achievement-title">Achievement unlocked</h3>
      <p className="Achievement-paragraph">{children}</p>
    </div>
  );
};

export default Achievement;
