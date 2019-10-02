const CalculateRarityDistribution = (cards) => {
  const rarityDistribution = {
    Common: 0,
    Rare: 0,
    Epic: 0,
    Legendary: 0,
  };

  if (cards.length === 0) return rarityDistribution;

  for (let i = 0; i < cards.length; i += 1) {
    if (cards[i].state !== 'notSelected') {
      if (cards[i].rarity === 'Common') {
        rarityDistribution.Common += 1;
      } else if (cards[i].rarity === 'Rare') {
        rarityDistribution.Rare += 1;
      } else if (cards[i].rarity === 'Epic') {
        rarityDistribution.Epic += 1;
      } else if (cards[i].rarity === 'Legendary') {
        rarityDistribution.Legendary += 1;
      }
    }
  }
  return rarityDistribution;
};

export default CalculateRarityDistribution;
