const generateRandomDeck = (cardsData) => ({
  type: 'GENERATE_RANDOM_DECK',
  cardsData,
});

export default generateRandomDeck;
