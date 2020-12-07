import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalRounds } from 'slices/gameSlice';
import { ProgressGrid, ProgressItem } from './ProgressBar.styles';

interface IProps {
  readonly currentRound: number;
}

const ProgressBar: React.FC<IProps> = ({ currentRound }) => {
  const totalRounds = useSelector(selectTotalRounds);

  return (
    <ProgressGrid>
      {[...Array(totalRounds)].map((x, i) => (
        <ProgressItem active={currentRound < i + 1} key={i} />
      ))}
    </ProgressGrid>
  );
};

export default ProgressBar;
