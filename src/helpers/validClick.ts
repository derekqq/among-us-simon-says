export const validClick = (userArr: number[], randArr: number[]) =>
  userArr.every((item, index) => {
    return randArr[index] === userArr[index];
  });
