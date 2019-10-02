import axios from 'axios';
import handleDeckState from './handleDeckState';

describe('cards reducer', () => {
  it('should handle initial state', () => {
    expect(
      handleDeckState(undefined, {}),
    ).toEqual([]);
  });

  it('should handle GENERATE_RANDOM_DECK', () => axios('/cardsData')
    .then((res) => {
      const result = handleDeckState(undefined, { type: 'GENERATE_RANDOM_DECK', cardsData: res.data });
      expect(result).toHaveLength(8);
    })
    .catch((err) => console.log(err)));
});
