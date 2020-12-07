interface IGameSliceState {
  isLaunched: boolean;
  totalRounds: number;
  currentRound: number;
  lastSuccessRound: number;
  isUserTurn: false;
  randomArray: number[];
  userArray: number[];
}

interface IState<T> {
  [key: string]: T;
}

export { IState, IGameSliceState };
