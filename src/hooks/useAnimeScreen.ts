import { debug, time } from 'console';
import { useRef, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTotalRounds,
  selectCurrentRound,
  selectRandomArray,
  setTurn,
} from 'slices/gameSlice';
import { delay } from 'lodash';
// const delay = require('lodash.delay');

const isUserTurn = (currRound: number, currKey: number): boolean => {
  return !(currKey < currRound);
};

const hideItem = (element: HTMLDivElement): void => {
  element.removeAttribute('style');
};

const showItem = (element: HTMLDivElement): void => {
  element.style.background = 'blue';
};

const useAnimeScreen = () => {
  const dispatch = useDispatch();
  const screenRef = useRef<HTMLDivElement | null>(null);
  const randomArray = useSelector(selectRandomArray);
  const currentRound = useSelector(selectCurrentRound);

  useLayoutEffect(() => {
    if (screenRef.current === null) return;

    randomArray.every((item, index) => {
      //@ts-ignore
      const currItem: HTMLDivElement = screenRef.current.children[item];
      const delayTime = (index + 1) * 500;
      const hideTime = delayTime + 200;
      if (isUserTurn(currentRound, index)) {
        delay(() => dispatch(setTurn(true)), delayTime);
        return false;
      }

      delay(() => showItem(currItem), delayTime);
      delay(() => hideItem(currItem), hideTime);
      return true;
    });
  }, [currentRound]);

  return { currentRound, screenRef };
};

export default useAnimeScreen;
