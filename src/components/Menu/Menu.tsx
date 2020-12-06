import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start } from 'slices/gameSlice';
import { selectTotalSteps } from 'slices/gameSlice';
import { Button, Container } from './Menu.styles';
import CustomSelect from './CustomSelect';
import { randomArray } from 'helpers/randomArray';

const Menu: React.FC = () => {
  const totalSteps = useSelector(selectTotalSteps);
  const [selectedStep, setSelectedStep] = useState(totalSteps);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStep(Number(e.target.value));
  };

  const handleSumbit = () => {
    dispatch(start({ totalSteps: selectedStep, randomArray: randomArray(selectedStep, 16) }));
  };

  return (
    <Container>
      <Button onClick={handleSumbit}>START</Button>
      <CustomSelect onChange={handleChange} draft={selectedStep} count={10} />
    </Container>
  );
};

export default Menu;
