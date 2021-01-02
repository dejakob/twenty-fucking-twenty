/**
 * @source https://tablericons.com/
 */
import { FC } from "react";

interface Props {
  height: number;
  width: number;
  color: string;
}

const TiktokIcon: FC<Props> = ({ height, width, color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-tiktok"
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
      <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
    </svg>
  );
};

export default TiktokIcon;
