import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentRound,
  selectRandomArray,
  setTurn,
  selectShouldChange,
} from 'slices/gameSlice';
import { delay } from 'lodash';
import { isUserTurn, hideItem, showItem } from 'helpers/animeScreen';

const useAnimeScreen = () => {
  const dispatch = useDispatch();
  const screenRef = useRef<HTMLDivElement | null>(null);
  const randomArray = useSelector(selectRandomArray);
  const currentRound = useSelector(selectCurrentRound);
  const shouldChange = useSelector(selectShouldChange);

  useEffect(() => {
    if (screenRef.current === null) return;

    randomArray.every((item, index) => {
      //@ts-ignore
      const currItem: HTMLDivElement = screenRef.current.children[item];
      const delayTime = (index + 1) * 1000 + 500;
      const hideTime = delayTime + 500;
      if (isUserTurn(currentRound, index)) {
        delay(() => dispatch(setTurn(true)), delayTime);
        return false;
      }

      delay(() => showItem(currItem), delayTime);
      delay(() => hideItem(currItem), hideTime);
      return true;
    });
  }, [currentRound, shouldChange]);

  return { currentRound, screenRef };
};

export default useAnimeScreen;
