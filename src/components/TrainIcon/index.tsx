/**
 * @source https://tablericons.com/
 */
import { FC } from "react";

interface Props {
  height: number;
  width: number;
  color: string;
}

const TrainIcon: FC<Props> = ({ height, width, color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-train"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8" />
      <path d="M3 15h16a2 2 0 0 0 2 -2" />
      <path d="M3 6v5h17.5" />
      <line x1="3" y1="10" x2="3" y2="14" />
      <line x1="8" y1="11" x2="8" y2="6" />
      <line x1="13" y1="11" x2="13" y2="6.5" />
      <line x1="3" y1="19" x2="21" y2="19" />
    </svg>
  );
};

export default TrainIcon;
