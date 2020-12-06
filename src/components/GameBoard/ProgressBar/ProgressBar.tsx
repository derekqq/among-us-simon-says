import { debug } from 'console';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalSteps } from 'slices/gameSlice';
import { start } from 'slices/gameSlice';
import { ProgressGrid, ProgressItem } from './ProgressBar.styles';

interface IProps {
  readonly currentStep: number;
}

const ProgressBar: React.FC<IProps> = ({ currentStep }) => {
  const totalSteps = useSelector(selectTotalSteps);

  return (
    <ProgressGrid>
      {[...Array(totalSteps)].map((x, i) => (
        <ProgressItem active={currentStep < i + 1} key={i} />
      ))}
    </ProgressGrid>
  );
};

export default ProgressBar;
