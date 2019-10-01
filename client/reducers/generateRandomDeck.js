import randomize from '../helpers/randomize';

const generateRandomDeckReducer = (previousState = [], action = {}) => {
  switch (action.type) {
    case 'GENERATE_RANDOM_DECK':
      // Select random 8 elements from the array
      return randomize(action.cardsData, 8);
    default:
      return previousState;
  }
};

export default generateRandomDeckReducer;
