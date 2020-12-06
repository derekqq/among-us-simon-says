import { createSlice } from '@reduxjs/toolkit';
import { IState, IGameSliceState } from 'types';

const initialState: IGameSliceState = {
  isLaunched: false,
  totalSteps: 5,
  currentStep: 1,
  isWin: false,
  randomArray: [],
  userArray: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    start: (state, action) => {
      state.isLaunched = true;
      state.totalSteps = action.payload.totalSteps;
      state.currentStep = 1;
      state.randomArray = action.payload.randomArray;
    },
    reset: (state) => {
      state.isLaunched = false;
      state.userArray = [];
    },
    nextStep: (state, action) => {
      state.currentStep += 1;
    },
    prevStep: (state, action) => {
      state.currentStep -= 1;
    },
  },
});

export const { start, reset } = gameSlice.actions;

export const selectIsWin = (state: IState<IGameSliceState>) => state.game.isWin;
export const selectIsLaunched = (state: IState<IGameSliceState>) => state.game.isLaunched;

export const selectCurrentStep = (state: IState<IGameSliceState>) => state.game.currentStep;
export const selectTotalSteps = (state: IState<IGameSliceState>) => state.game.totalSteps;

export const selectRandomArray = (state: IState<IGameSliceState>) => state.game.randomArray;

export default gameSlice.reducer;
