interface IGameSliceState {
  isLaunched: boolean;
  totalSteps: number;
  currentStep: number;
  isWin: false;
}

interface IState<T> {
  [key: string]: T;
}

export { IState, IGameSliceState };
