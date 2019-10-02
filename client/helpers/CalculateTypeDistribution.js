const CalculateTypeDistribution = (cards) => {
  const typeDistribution = {
    Troop: 0,
    Spell: 0,
    Building: 0,
  };

  if (cards.length === 0) return typeDistribution;

  for (let i = 0; i < cards.length; i += 1) {
    if (cards[i].state !== 'notSelected') {
      if (cards[i].type === 'Troop') {
        typeDistribution.Troop += 1;
      } else if (cards[i].type === 'Spell') {
        typeDistribution.Spell += 1;
      } else if (cards[i].type === 'Building') {
        typeDistribution.Building += 1;
      }
    }
  }

  return typeDistribution;
};

export default CalculateTypeDistribution;
