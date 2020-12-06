import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { start } from 'slices/gameSlice';
import ResetButton from './ResetButton';
import { Container, Wrapper } from './GameBoard.styles';
import Screen from './Box/Screen';

const Gameboard: React.FC = () => {
  return (
    <Container>
      <ResetButton />
      <Wrapper>
        <Screen></Screen>
        <Screen></Screen>
      </Wrapper>
    </Container>
  );
};

export default Gameboard;
