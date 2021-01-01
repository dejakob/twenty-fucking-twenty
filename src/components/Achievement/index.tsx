import { FC, ReactNode } from 'react';
import './Achievement.scss';

import MicrophoneIcon from '../MicrophoneIcon';
import AwardIcon from '../AwardIcon';
import TrophyIcon from '../TrophyIcon';
import BriefcaseIcon from '../BriefcaseIcon';
import VirusIcon from '../VirusIcon';

export enum TYPES {
  TALK = 'Talk',
  AWARD = 'Award',
  TROPHY = 'Trophy',
  WORK = 'Work',
  VIRUS = 'Virus'
}

interface Props {
  type: TYPES;
  children: ReactNode;
  title?: string;
}

const typeToIcon = (type: TYPES) => {
  switch (type) {
    case TYPES.TALK:
      return MicrophoneIcon;

    case TYPES.AWARD:
      return AwardIcon;

    case TYPES.TROPHY:
      return TrophyIcon;

    case TYPES.WORK:
      return BriefcaseIcon;

    case TYPES.VIRUS:
      return VirusIcon;

    default:
      return null;
  }
};

const Achievement: FC<Props> = ({ type, title, children }: Props) => {
  const icon = typeToIcon(type)!({ color: '#333', height: 200, width: 200 });

  return (
    <div className="Achievement">
      <div className={`Achievement-icon Achievement-icon${type}`}>{icon}</div>
      <h3 className="Achievement-title">{title || 'Achievement unlocked'}</h3>
      <p className="Achievement-paragraph">{children}</p>
    </div>
  );
};

export default Achievement;
