export const isUserTurn = (currRound: number, currKey: number): boolean => {
  return !(currKey < currRound);
};

export const hideItem = (element: HTMLDivElement): void => {
  element.removeAttribute('style');
};

export const showItem = (element: HTMLDivElement): void => {
  element.style.background = 'blue';
};
