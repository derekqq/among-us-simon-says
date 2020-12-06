import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalSteps } from 'slices/gameSlice';
import { start } from 'slices/gameSlice';
import { ProgressGrid } from './ProgressBar.styles';

interface IProps {
  readonly active: number;
}

const ProgressBar: React.FC<IProps> = ({ active }) => {
  const totalSteps = useSelector(selectTotalSteps);

  return <ProgressGrid></ProgressGrid>;
};

export default ProgressBar;
