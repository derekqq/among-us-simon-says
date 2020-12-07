import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentRound,
  selectRandomArray,
  selectUserArray,
  setTurn,
  userClick,
  success,
  fail,
  selectIsUserTurn,
} from 'slices/gameSlice';
import { compareArray } from 'helpers/compareArray';

const useKeyboard = () => {
  const dispatch = useDispatch();
  const userArray = useSelector(selectUserArray);
  const randomArray = useSelector(selectRandomArray);
  const isUserTurn = useSelector(selectIsUserTurn);
  const currentRound = useSelector(selectCurrentRound);

  useEffect(() => {
    const isValid = compareArray(userArray, randomArray);
    isValid || dispatch(fail());

    dispatch(setTurn(true));

    if (userArray.length < currentRound) return;
    isValid && dispatch(success());
  }, [userArray]);

  const handleClick = (i: number, e: unknown) => {
    dispatch(userClick(i));
    dispatch(setTurn(false));
  };

  return { currentRound, isUserTurn, handleClick };
};

export default useKeyboard;
