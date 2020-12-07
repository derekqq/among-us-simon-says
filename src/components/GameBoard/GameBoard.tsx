import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { start } from 'slices/gameSlice';
import ResetButton from './ResetButton';
import { Container, Wrapper } from './GameBoard.styles';
import { Screen, Keyboard } from './Box';
import useWin from 'hooks/useWin';

const Gameboard: React.FC = () => {
  const { isWin } = useWin();
  return (
    <Container>
      <ResetButton />
      <Wrapper>
        {isWin ? (
          <h1>You are Win</h1>
        ) : (
          <>
            <Screen />
            <Keyboard />
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Gameboard;
