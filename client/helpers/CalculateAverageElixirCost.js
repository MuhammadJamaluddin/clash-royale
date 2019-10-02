const CalculateAverageElixirCost = (cards) => {
  if (cards.length === 0) return 0;

  let totalElixirCost = 0;

  for (let i = 0; i < cards.length; i += 1) {
    if (cards[i].state !== 'notSelected') {
      totalElixirCost += cards[i].elixirCost;
    }
  }

  return Math.floor(totalElixirCost / cards.length);
};

export default CalculateAverageElixirCost;
