/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import HSBar from 'react-horizontal-stacked-bar-chart';
import CalculateAverageElixirCost from '../../helpers/CalculateAverageElixirCost';
import CalculateMinimumCycleCost from '../../helpers/CalculateMinimumCycleCost';
import CalculateRarityDistribution from '../../helpers/CalculateRarityDistribution';
import CalculateTypeDistribution from '../../helpers/CalculateTypeDistribution';

const Statistics = ({ currentDeck }) => {
  const averageElixirCost = CalculateAverageElixirCost(currentDeck);

  const minimumCycleCost = CalculateMinimumCycleCost(currentDeck);

  const rarityDistribution = CalculateRarityDistribution(currentDeck);

  const typeDistribution = CalculateTypeDistribution(currentDeck);

  return (
    <Fragment>
      <h2 id="statisticsHead">Current Deck Statistics</h2>

      <h3>Average Elixir Cost</h3>
      <HSBar
        className="bar"
        showTextIn
        data={[
          { value: averageElixirCost, description: `${averageElixirCost}`, color: 'rgb(72, 156, 189)' },
          { value: 10, color: 'white' },
        ]}
      />

      <h3>Minimum Cycle Cost</h3>
      <HSBar
        className="bar"
        showTextIn
        data={[
          { value: minimumCycleCost, description: `${minimumCycleCost}`, color: 'rgb(72, 156, 189)' },
          { value: 27, color: 'white' },
        ]}
      />

      <h3>Card Types</h3>
      <HSBar
        className="bar"
        showTextIn
        data={[
          {
            value: typeDistribution.Troop,
            description: `${typeDistribution.Troop} Troops`,
            color: 'rgb(72, 156, 189)',
          },
          {
            value: typeDistribution.Spell,
            description: `${typeDistribution.Spell} Spells`,
            color: 'rgb(245, 32, 174)',
          },
          {
            value: typeDistribution.Building,
            description: `${typeDistribution.Building} Building`,
            color: 'rgb(247, 148, 27)',
          },
        ]}
      />

      <h3>Card Rarities</h3>
      <HSBar
        className="bar"
        showTextIn
        data={[
          {
            value: rarityDistribution.Common,
            description: `${rarityDistribution.Common} Common`,
            color: 'rgb(72, 156, 189)',
          },
          {
            value: rarityDistribution.Rare,
            description: `${rarityDistribution.Rare} Rare`,
            color: 'rgb(245, 32, 174)',
          },
          {
            value: rarityDistribution.Epic,
            description: `${rarityDistribution.Epic} Epic`,
            color: 'rgb(247, 148, 27)',
          },
          {
            value: rarityDistribution.Legendary,
            description: `${rarityDistribution.Legendary} Legendary`,
            color: 'rgb(242, 22, 95)',
          },
        ]}
      />
    </Fragment>
  );
};

Statistics.propTypes = {
  currentDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Statistics;
