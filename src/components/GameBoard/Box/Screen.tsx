import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start } from 'slices/gameSlice';
import { BoxContainer, ScreenGrid, ScreenItem } from './Box.styles';
import ProgressBar from '../ProgressBar/ProgressBar';
import { selectTotalSteps, selectCurrentStep, selectRandomArray } from 'slices/gameSlice';
import { clear } from 'console';

const Screen: React.FC = () => {
  const screenRef = useRef(null);
  const randomArray = useSelector(selectRandomArray);
  const currentStep = useSelector(selectCurrentStep);
  const totalSteps = useSelector(selectTotalSteps);

  useEffect(() => {
    randomArray.map((item, index) => {
      if (index > totalSteps - 1) return false;
      //@ts-ignore
      const itemToShow = screenRef.current.children[item];
      const timeShow = (index + 1) * 500;
      const timeHide = timeShow + 200;
      setTimeout(() => {
        itemToShow.style.background = 'blue';
      }, timeShow);
      setTimeout(() => {
        itemToShow.style.background = 'black';
      }, timeHide);
    });
  }, [currentStep]);

  return (
    <BoxContainer>
      <ProgressBar currentStep={3}></ProgressBar>
      <ScreenGrid ref={screenRef}>
        {[...Array(16)].map((x, i) => (
          <ScreenItem key={'screenItem' + i} active={true} />
        ))}
      </ScreenGrid>
    </BoxContainer>
  );
};

export default Screen;
