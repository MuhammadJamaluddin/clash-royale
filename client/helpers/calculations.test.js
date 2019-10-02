import CalculateAverageElixirCost from './CalculateAverageElixirCost';
import CalculateRarityDistribution from './CalculateRarityDistribution';
import CalculateTypeDistribution from './CalculateTypeDistribution';

const cards = [
  {
    _id: '5b099537ab411c001423ec3b',
    idName: 'arrows',
    rarity: 'Common',
    type: 'Spell',
    name: 'Arrows',
    description: 'Arrows pepper a large area, damaging all enemies hit. Reduced damage to Crown Towers.',
    elixirCost: 3,
    copyId: 28000001,
    arena: 0,
    order: 0,
    __v: 0,
  },
  {
    _id: '5b099537ab411c001423ec3c',
    idName: 'bomber',
    rarity: 'Common',
    type: 'Troop',
    name: 'Bomber',
    description: 'Small, lightly protected skeleton that throws bombs. Deals area damage that can wipe out a swarm of enemies.',
    elixirCost: 3,
    copyId: 26000013,
    arena: 0,
    order: 1,
    __v: 0,
  },
  {
    _id: '5b099537ab411c001423ec3e',
    idName: 'archers',
    rarity: 'Common',
    type: 'Troop',
    name: 'Archers',
    description: 'A pair of unarmored ranged attackers. They\'ll help you take down ground and air units, but you\'re on your own with hair coloring advice.',
    elixirCost: 3,
    copyId: 26000001,
    arena: 0,
    order: 2,
    __v: 0,
  },
];

describe('cards reducer', () => {
  it('should handle initial state', () => {
    expect(
      CalculateAverageElixirCost(cards),
    ).toEqual(3);
  });

  it('should handle initial state', () => {
    expect(
      CalculateRarityDistribution(cards),
    ).toEqual({
      Common: 3, Rare: 0, Epic: 0, Legendary: 0,
    });
  });

  it('should handle initial state', () => {
    expect(
      CalculateTypeDistribution(cards),
    ).toEqual({
      Troop: 2, Spell: 1, Building: 0,
    });
  });
});
