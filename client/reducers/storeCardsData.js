const storeCardsData = (previousState = [], action) => {
  switch (action.type) {
    case 'STORE_CARDS_DATA':
      return action.cardsData;

    default:
      return previousState;
  }
};

export default storeCardsData;
