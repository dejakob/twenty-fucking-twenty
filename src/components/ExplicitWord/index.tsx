import React, { FC, ReactNode } from 'react';
import './ExplicitWord.scss';

interface Props {
  children: ReactNode;
}

const ExplicitWord: FC<Props> = ({ children }: Props) => {
  return <em className="ExplicitWord">{children}</em>;
};

export default ExplicitWord;
