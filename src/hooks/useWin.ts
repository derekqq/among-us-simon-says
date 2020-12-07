import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentRound, selectTotalRounds } from 'slices/gameSlice';

const validClick = (userArr: number[], randArr: number[]) =>
  userArr.every((item, index) => {
    return randArr.indexOf(item) === index;
  });

const useWin = () => {
  const totalRounds = useSelector(selectTotalRounds);
  const currentRound = useSelector(selectCurrentRound);
  const isWin = currentRound > totalRounds;

  useEffect(() => {}, [currentRound]);

  return { isWin };
};

export default useWin;
