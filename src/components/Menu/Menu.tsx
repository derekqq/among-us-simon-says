import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start } from 'slices/gameSlice';
import { selectTotalSteps } from 'slices/gameSlice';
import { Button, Container } from './Menu.styles';
import CustomSelect from './CustomSelect';

const Menu: React.FC = () => {
  const totalSteps = useSelector(selectTotalSteps);
  const [selectedOption, setSelectedOption] = useState(totalSteps);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(Number(e.target.value));
  };

  const handleSumbit = () => {
    dispatch(start(selectedOption));
  };

  return (
    <Container>
      <Button onClick={handleSumbit}>START</Button>
      <CustomSelect onChange={handleChange} draft={selectedOption} count={10} />
    </Container>
  );
};

export default Menu;
