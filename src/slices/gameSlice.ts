import { createSlice } from '@reduxjs/toolkit';
import { IState, IGameSliceState } from 'types';

const initialState: IGameSliceState = {
  isLaunched: false,
  totalSteps: 5,
  currentStep: 1,
  isWin: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    start: (state, action) => {
      state.isLaunched = true;
      state.totalSteps = action.payload;
      state.currentStep = 1;
    },
    reset: (state) => {
      state.isLaunched = false;
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

export const selectTotalSteps = (state: IState<IGameSliceState>) => state.game.totalSteps;

export const selectIsLaunched = (state: IState<IGameSliceState>) => state.game.isLaunched;

export const selectIsWin = (state: IState<IGameSliceState>) => state.game.isWin;

export default gameSlice.reducer;
