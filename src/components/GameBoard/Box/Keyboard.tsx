import React from 'react';
import { BoxContainer, KeyboardGrid, KeyboardItem } from './Box.styles';
import ProgressBar from '../ProgressBar/ProgressBar';
import useKeyboard from 'hooks/useKeyboard';

const Keyboard: React.FC = () => {
  const { currentRound, isUserTurn, handleClick } = useKeyboard();

  return (
    <BoxContainer>
      <ProgressBar currentRound={currentRound - 1}></ProgressBar>
      <KeyboardGrid active={isUserTurn}>
        {[...Array(16)].map((x, i) => (
          <KeyboardItem onClick={(e) => handleClick(i, e)} key={'screenItem' + i} />
        ))}
      </KeyboardGrid>
    </BoxContainer>
  );
};

export default Keyboard;
