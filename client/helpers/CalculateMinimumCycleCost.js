const CalculateMinimumCycleCost = (cards) => {
  if (cards.length === 0) return 0;

  let minimumCycleCost = 0;

  // Sort an array of numbers in ascending order
  const sortedArray = cards.sort((a, b) => a - b);
  // to ignore any non-selected elements
  let flag = 0;

  for (let i = 0; i < sortedArray.length; i += 1) {
    if (flag === 4) {
      break;
    }

    if (cards[i].state !== 'notSelected') {
      minimumCycleCost += sortedArray[i].elixirCost;
      flag += 1;
    }
  }

  return minimumCycleCost;
};

export default CalculateMinimumCycleCost;
