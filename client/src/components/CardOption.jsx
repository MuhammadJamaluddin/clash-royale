/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const CardOption = ({ card, originalCard, setCard }) => (
  <img
    alt={`a game card showing ${card.idName}`}
    src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`}
    onClick={() => {
      setCard({ originalCardId: originalCard._id, selectedCard: card });
    }}
  />
);

CardOption.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    idName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    elixirCost: PropTypes.number.isRequired,
  }).isRequired,
  originalCard: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    idName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    elixirCost: PropTypes.number.isRequired,
  }).isRequired,
  setCard: PropTypes.func.isRequired,
};

export default CardOption;
