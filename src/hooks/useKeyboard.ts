import { useRef, useEffect } from 'react';
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

const validClick = (userArr: number[], randArr: number[]) =>
  userArr.every((item, index) => {
    return randArr.indexOf(item) === index;
  });

const useKeyboard = () => {
  const dispatch = useDispatch();
  const userArray = useSelector(selectUserArray);
  const randomArray = useSelector(selectRandomArray);
  const isUserTurn = useSelector(selectIsUserTurn);
  const currentRound = useSelector(selectCurrentRound);

  useEffect(() => {
    dispatch(setTurn(true));

    if (userArray.length < currentRound) return;

    const isValid = validClick(userArray, randomArray);
    isValid ? dispatch(success()) : dispatch(fail());
  }, [userArray]);

  const handleClick = (i: number, e: unknown) => {
    dispatch(userClick(i));
    dispatch(setTurn(false));
  };

  return { currentRound, isUserTurn, handleClick };
};

export default useKeyboard;
