import { isUserTurn } from 'helpers/animeScreen';

describe('animeScreen', () => {
  it('return true, when current key is higher than current round', () => {
    const currentRound = 5;
    const currentKey = 6;

    expect(isUserTurn(currentRound, currentKey)).toBe(true);
  });

  it('return false, when current key is lower than current round', () => {
    const currentRound = 5;
    const currentKey = 3;

    expect(isUserTurn(currentRound, currentKey)).toBe(false);
  });
});
