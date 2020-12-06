interface IGameSliceState {
  isLaunched: boolean;
  totalSteps: number;
  currentStep: number;
  isWin: false;
  randomArray: number[];
  userArray: number[];
}

interface IState<T> {
  [key: string]: T;
}

export { IState, IGameSliceState };
